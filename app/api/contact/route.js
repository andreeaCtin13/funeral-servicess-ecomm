import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  try {
    const body = await req.json();

    // Salvează în Firestore
    const docRef = await addDoc(collection(db, "contactMessages"), {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      inquiryType: body.inquiryType,
      message: body.message,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, id: docRef.id }), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
