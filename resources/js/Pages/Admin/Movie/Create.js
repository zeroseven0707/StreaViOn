import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/inertia-react";
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        isfeatured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie"></Head>
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <Label forInput="name" value="Name" />
                <Input
                    isFocused={true}
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the name of movie"
                    isError={errors.name}
                />
                <Label forInput="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the category of movie"
                    isError={errors.category}
                />
                <Label
                    forInput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <Input
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of movie"
                    isError={errors.video_url}
                />
                <Label
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="insert thumbnail of the movie"
                    isError={errors.thumbnail}
                />
                <Label forInput="rating" value="Rating" className="mt-4" />
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="insert rating of the movie"
                    isError={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <Label
                        forInput="isfeatured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="isfeatured"
                        handleChange={(e) =>
                            setData("isfeatured", e.target.checked)
                        }
                    />
                </div>
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
