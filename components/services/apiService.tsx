"use server";

interface Data {
    name: string;
}

export const getDataOnServer = async () => {
    let data: Data | undefined = undefined;
    let isError = false;
    let error = "";

    try {
        const res = await fetch("url");
        data = await res.json();
    } catch (e) {
        isError = true;
        if (typeof e === "string") error = e;
        else if (e instanceof Error) error = e.message;
        else error = "Error";
    }

    return { data, isError, error };
};

export async function getServerSideProps() {
    try {
        const res = await fetch('https://fsboafrica.com/api/properties/latest');
        const data = await res.json();

        if (!data) {
            return {
                notFound: true,
            };
        }
        return data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            notFound: true,
        };
    }
}