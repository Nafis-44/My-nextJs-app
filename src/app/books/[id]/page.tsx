
import Image from "next/image";
import { IBook } from "@/type/Book"; // আপনার ইন্টারফেসের নাম অনুযায়ী
import ReadButton from "@/component/BookDetails/ReadButton";
import WishListButton from "@/component/BookDetails/WishlistButton";

interface IDetailsPage {
  params: Promise<{ id: string }>;
}

// Data fetching function
const getBooks = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/booksData.json`, {
      cache: "no-store",
    });
    if (!res.ok){
       console.error("Fetch faild with status:", res.status);
       return [];}
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error Fatching Book Data:", error)
    return [];
  }
};

const BookDetailPage = async ({ params }: IDetailsPage) => {
  const { id } = await params;
  const bookData: IBook[] = await getBooks();

  // bookId specific book find kora
  const book = bookData?.find((b) => Number(b.bookId) === Number(id));

  if (!book) {
    return <div className="container mx-auto p-6">Book not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card lg:card-side bg-base-100 shadow-sm border border-gray-200 rounded-2xl overflow-hidden p-6 gap-6">
        <figure className="relative w-full lg:w-1/3 h-80 bg-gray-50 rounded-xl overflow-hidden">
          <Image
            src={book.image || "/hero_img.jpg"} // Public folder file sorasori / diye likhte hoy
            alt={book.bookName}
            width={800}
            height={500}
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
          <p className="text-gray-600">By: {book.author}</p>
          <div className="my-2">
            <span className="badge badge-primary">{book.category}</span>
            <span className="ml-2 text-sm text-yellow-600">★ {book.rating}</span>
          </div>
          <p className="text-sm text-gray-500">
            Publisher: {book.publisher} ({book.yearOfPublishing})
          </p>
          <p className="text-sm text-gray-500">Total Pages: {book.totalPages}</p>
          <div className="card-actions justify-end mt-4">
            <ReadButton book={book} />
            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;