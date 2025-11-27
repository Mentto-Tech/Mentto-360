'use server';

export async function registerSubscriber(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const position = formData.get("position") as string;
    const phone = formData.get("phone") as string;
    const coupon = (formData.get("coupon") as string) || "";

    const finalValue = formData.get("final_value") as string;

    if (!email || !name || !company || !position || !phone) {
        return { success: false, message: "Todos os campos (exceto cupom) são obrigatórios." };
    }

    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey) {
        console.error("MAILERLITE_API_KEY is not defined in environment variables.");
        return {
            success: false,
            message: "Erro de configuração no servidor. Entre em contato com o suporte.",
        };
    }

    try {
        const payload = {
            email: email,
            fields: {
                name: name,
                company: company,
                cargo: position,
                phone: phone,
                voucher: coupon,
                message: finalValue,
            },
            groups: process.env.MAILERLITE_GROUP_ID ? [process.env.MAILERLITE_GROUP_ID] : [],
        };

        console.log("Sending payload to MailerLite:", JSON.stringify(payload, null, 2));

        const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log("MailerLite response:", JSON.stringify(data, null, 2));

        if (!response.ok) {
            console.error("MailerLite API Error:", data);

            if (response.status === 422) {
                return { success: false, message: "E-mail inválido ou já cadastrado." };
            }

            return { success: false, message: "Erro ao enviar dados para o MailerLite." };
        }

        return { success: true, message: "Inscrição realizada com sucesso!" };
    } catch (error) {
        console.error("Error submitting to MailerLite:", error);
        return { success: false, message: "Erro inesperado. Tente novamente mais tarde." };
    }
}
