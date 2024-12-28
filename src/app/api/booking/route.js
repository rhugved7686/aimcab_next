import Trip from "../../../model/Trip"
import sequelize, { initializeDatabase } from "../../../utils/connectDB";
import { NextResponse } from "next/server";

// Ensure the database connection is initialized
initializeDatabase();

export const POST = async (req) => {
    try {
        // Parse the request body and ensure it's a valid JSON payload
        const data = await req.json();  // Use req.json() to parse JSON request body in Next.js API routes
        const id = "AIM"+ new Date().getTime();
        const trip = await Trip.create({...data, booking_id : id, bookid: id});
        
        return NextResponse.json({ message: "Trip created successfully", trip }); // Send a JSON response with a success message
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creating trip", error: error.message }, { status: 500 });
    }
};


