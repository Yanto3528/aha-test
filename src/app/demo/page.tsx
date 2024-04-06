import { SignupForm } from './_components/form';

export default function DemoPage() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className="mb-10">Sign Up to Aha to continue to Aha Web.</p>
      <SignupForm />
      <div className="h-[400px]" />
    </div>
  );
}
