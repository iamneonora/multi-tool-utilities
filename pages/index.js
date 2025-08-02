import Head from "next/head";
import AgeCalculator from "../components/AgeCalculator";
import DateDiffCalculator from "../components/DateDiffCalculator";

export default function Home() {
    return (
        <>
            <Head>
                <title>Multi Tool Utilities</title>
                <meta name="description" content="A collection of everyday utilities like age calculator and date difference calculator." />
            </Head>

            <main className="min-h-screen p-8 bg-gray-100">
                <h1 className="text-3xl font-bold mb-6 text-center">Multi Tool Utilities</h1>

                {/* Tool 1: Age Calculator */}
                <section className="mb-12">
                    <AgeCalculator />
                </section>

                {/* Tool 2: Date Difference Calculator */}
                <section className="mb-12">
                    <DateDiffCalculator />
                </section>
            </main>
        </>
    );
}
