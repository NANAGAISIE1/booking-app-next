import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export const GET = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("sample_airbnb");

    const listingsAndReviews = await db
      .collection("listingsAndReviews")
      .find({})
      .limit(10)
      .toArray();

    return NextResponse.json(listingsAndReviews, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};
