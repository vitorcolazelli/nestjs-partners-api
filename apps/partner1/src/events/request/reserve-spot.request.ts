import { TicketKind } from "@prisma/client";

export class ReserveSportRequest {
    spots: string[];
    ticket_kind: TicketKind;
    email: string;
}