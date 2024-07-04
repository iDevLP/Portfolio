import type { APIRoute } from "astro";
import { db, Users } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
    const { username, password } = await request.json();
    console.log(username + " " + password);
    const validation = await db.insert(Users).values({ user: username, password: password });
    if (validation) {
        return new Response(JSON.stringify({ message: 'Form data received successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    else {
        return new Response(JSON.stringify({ message: 'error' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}