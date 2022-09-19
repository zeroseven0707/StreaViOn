import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Link, Head } from "@inertiajs/inertia-react";
export default function Register() {
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img
                            src="/images/logoo.png"
                            alt=""
                            className="w-1/2 -ml-10"
                        />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        forInput="fullname"
                                        value="Full Name"
                                    ></Label>
                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                    />
                                </div>
                                <div>
                                    <Label
                                        forInput="email"
                                        value="Input Your Email Addrees"
                                    ></Label>
                                    <Input
                                        type="email"
                                        name="fullname"
                                        placeholder="Your Email..."
                                    />
                                </div>
                                <div>
                                    <Label
                                        forInput="password"
                                        value="Password"
                                    ></Label>
                                    <Input
                                        type="text"
                                        name="fullname"
                                        placeholder="Create Password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* <a
                                href="/"
                                className="rounded-2xl bg-alerange py-[13px] text-center"
                            >
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </a> */}
                                <Link href={route("prototype.dashboard")}>
                                    <Button type="button">
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </Button>
                                </Link>
                                {/* <a
                                href="sign_in.html"
                                className="rounded-2xl border border-white py-[13px] text-center"
                            >
                                <span className="text-base text-white">
                                    Sign In to My Account
                                </span>
                            </a> */}
                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
