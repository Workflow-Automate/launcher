import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { pin } = await req.json();

        if (!pin) {
            return Response.json({ success: false, message: "PIN missing" }, { status: 400 });
        }

        const saltRounds = 12;
        const hash = await bcrypt.hash(pin, saltRounds);

        return Response.json({ success: true, hash });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
