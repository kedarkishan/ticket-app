import Ticket from "@/app/(Models)/Ticket";

import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });

    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Ticket deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.error(err);
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;
    const updatedTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });
    return NextResponse.json({ updatedTicketData }, { status: 200 });
  } catch (err) {
    return NextResponse.error(err);
  }
}
