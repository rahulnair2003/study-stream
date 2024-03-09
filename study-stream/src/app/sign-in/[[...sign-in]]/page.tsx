import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "rgba(200,200,256,25)",
        width: "100%", 
        height: "100%",
      }}
    >
      <SignIn />
    </div>
  );
}
