type Props = {
  onStart: () => void
}

const StartScreen = ({ onStart }: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-8">
      <div>
        hi
      </div>
      <div>
        <button
          onClick={onStart}
          className="border rounded-sm px-4 py-2 animate-fade animate-delay-300"
        >
          시작
        </button>
      </div>
    </div>
  );
}

export default StartScreen;