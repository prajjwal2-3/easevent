"use server";
import prisma from "../postgresdb";
import { createEventType } from "../type";
import { getCategorybyId } from "./category.actions";
export async function createEvent({
  title,
  description,
  imageUrl,
  startDateTime,
  endDateTime,
  price,
  isFree,
  url,
  venue,
  categoryId,
  authorId,
}: createEventType) {
  if (
    !title ||
    !description ||
    !imageUrl ||
    !startDateTime ||
    !endDateTime ||
    price === undefined ||
    isFree === undefined ||
    !url ||
    !categoryId ||
    !authorId
  ) {
    throw new Error("Missing required properties");
  }
  try {
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        imageUrl,
        startDateTime,
        endDateTime,
        price,
        isFree,
        url,
        venue,
        categoryId,
        authorId,
      },
    });
    return newEvent;
  } catch (err) {
    throw new Error(`Failed to create Event ${err}`);
  }
}

export async function getAllEvents() {
  try {
    const allEvents = await prisma.event.findMany({});
    return allEvents;
  } catch (err) {
    throw new Error(`Failed to fetch all events ${err}`);
  }
}

export async function getEventbyId(id: number) {
  try {
    const Event = await prisma.event.findUnique({
      where: {
        id,
      },
    });
    if (!Event) {
      throw new Error(`No event exist with id: ${id}`);
    }
    return Event;
  } catch (err) {
    throw new Error(`Failed to fetch event ${err}`);
  }
}

export async function getEventbyCategoryId(id: number) {
  try {
    const categoryName = await getCategorybyId(id);
    const eventsInCategory = await prisma.event.findMany({
      where: {
        categoryId: id,
      },
    });

    if (!eventsInCategory) {
      throw new Error(
        `There are no events in the category: ${categoryName.name}`
      );
    }
    return eventsInCategory
  } catch (err) {
    throw new Error(`Failed to get events ${err}`);
  }
}
