import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center h-screen">
      <div className="container mx-auto p-8 text-center flex flex-col gap-4">
        <div className="top-container">
          <p>Welcome to:</p>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Zini <span className="text-zinigreen">Finances</span>
          </h1>
        </div>
        <div className="middle-container">
          <p className="text-lg mb-8">
            Your tool for{" "}
            <span className="text-zinibrown font-bold">managing</span> and{" "}
            <span className="text-zinibrown font-bold">tracking</span> your
            finances effortlessly.
          </p>
        </div>
        <div className="flex justify-center flex-col gap-10">
          <div className="register-container flex flex-col gap-4">
            <span>Don't have an account? Register right now!</span>
            <Link href="/register">
              <span className="bg-green-500 text-white font-semibold py-2 px-4 rounded">
                Register
              </span>
            </Link>
          </div>
          <div className="login-container flex flex-col gap-4">
            <span>Already registered? Log in below!</span>
            <Link href="/login">
              <span className="bg-ziniblue text-white font-semibold py-2 px-4 rounded ">
                Log In
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
