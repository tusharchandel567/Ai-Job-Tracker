type Props = {
  onAction: (action: any) => void;
};

export default function AIAssistant({ onAction }: Props) {
  const sendMessage = async (text: string) => {
    const res = await fetch("http://localhost:3001/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();
    onAction(data);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "300px",
        height: "100%",
        background: "#111",
        color: "#fff",
        padding: "10px",
      }}
    >
      <h3>AI Assistant</h3>

      <input
        placeholder="Ask me..."
        style={{ width: "100%" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage(e.currentTarget.value);
        }}
      />
    </div>
  );
}
