import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div>
      <h1>This is the Dashboard</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <h1>You are Signed In!</h1>
      </SignedIn>
      <UserButton />
    </div>
  );
}
