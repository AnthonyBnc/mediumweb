import { AuthModalSwitchProps } from ".";
import { signIn } from "next-auth/react";

export default function LoginModal({ setLoginModal }: AuthModalSwitchProps) {
  return (
    <div className="relative mx-auto flex h-3/4 w-full flex-col justify-center bg-white shadow-xl md:w-3/4 lg:w-1/2">
      <div className="mx-auto w-3/4 text-center md:w-1/2">
        <div className="font-serif text-3xl">Welcome back.</div>
        <div className="mx-auto mt-20 flex flex-col gap-3">
          <button
            className="relative rounded-full border border-black px-3 py-2 outline-none"
            onClick={() => signIn("google")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute left-2"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path
                  d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.41 5.41 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z"
                  fill="#34A853"
                ></path>
                <path
                  d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 3.96 7.96l3 2.33A5.36 5.36 0 0 1 12 6.6z"
                  fill="#EA4335"
                ></path>
              </g>
            </svg>
            <span className="w-full">Sign in with Google</span>
          </button>
        </div>
        <div className="mt-10">
          No account?{" "}
          <button
            className="font-bold text-green-700 hover:text-green-800"
            onClick={() => setLoginModal(false)}
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="mx-auto w-3/4 text-center">
        <div className="mt-20 text-xs text-gray-500">
          Click “Sign in” to agree to Mediums Terms of Service and acknowledge
          that Mediums Privacy Policy applies to you.
        </div>
      </div>
    </div>
  );
}
