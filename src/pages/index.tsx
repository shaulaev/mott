import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout position={"center"} header={false} footer={false}>
      <div className="container text-center mx-auto p-4">
        <h1 className="text-4xl font-bold ">
          Welcome to My Language Learning App
        </h1>
        <p className="mt-4">Start learning a new language today!</p>
        <div className="my-8 w-100 h-[300px]">
          <img
            className="relative mx-auto h-full object-cover"
            src="/images/choose.svg"
            alt="Choose your language!"
          />
        </div>
      </div>
    </MainLayout>
  );
}
