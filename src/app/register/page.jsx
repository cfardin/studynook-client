"use client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <div className="bg-gray-900 p-10 rounded-2xl w-96">
                <h3 className="text-2xl font-bold text-white mb-6">Register</h3>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>



                    {/* name */}
                    <TextField isRequired className="w-full" name="name">
                        <Label className="text-gray-300 text-sm">Name</Label>
                        <Input
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white outline-none focus:border-blue-500"
                            placeholder="Enter username"
                        />
                    </TextField>


                    {/* image */}
                    <TextField className="w-full" name="image">
                        <Label className="text-gray-300 text-sm">Image URL</Label>
                        <Input
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white outline-none focus:border-blue-500"
                            placeholder="URL"
                        />
                    </TextField>

                    {/* email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    value,
                                )
                            ) {
                                return "Enter a valid email";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-gray-300 text-sm">Email</Label>
                        <Input
                            placeholder="john@example.com"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                        <FieldError className="text-red-400 text-xs" />
                    </TextField>

                    {/* password */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Min 8 characters";
                            if (!/[A-Z]/.test(value))
                                return "Needs 1 uppercase letter";
                            if (!/[0-9]/.test(value)) return "Needs 1 number";
                            return null;
                        }}
                    >
                        <Label className="text-gray-300 text-sm">
                            Password
                        </Label>
                        <Input
                            placeholder="Enter your password"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white outline-none focus:border-blue-500"
                        />
                        <FieldError className="text-red-400 text-xs" />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-5"
                    >
                        Create Account
                    </Button>
                </Form>

                <h3 className="text-white text-md text-center my-1">or</h3>
                <Button type="submit" className="w-full bg-white hover:bg-blue-700 text-black hover:text-white font-semibold py-2 rounded-lg mt-2">
                    <FcGoogle /> Register with Google
                </Button>

            </div>
        </div>
    );
};

export default LoginPage;
