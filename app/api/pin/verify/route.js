import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { pin, storedHash } = await req.json();

        if (!pin || !storedHash) {
            return Response.json({ success: false, message: "Missing pin or storedHash" }, { status: 400 });
        }

        const match = await bcrypt.compare(pin, storedHash);

        return Response.json({ success: match });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
