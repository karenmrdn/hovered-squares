import LogoImg from "assets/img/logo192.png";

export const Header = () => {
  return (
    <header className="mb-8 bg-primary-500 text-white shadow-md">
      <div className="mx-auto flex max-w-3xl justify-between p-4">
        <div className="flex items-center gap-2">
          <img src={LogoImg} alt="Logo" width={25} />
          <p className="font-bold">Hovered squares</p>
        </div>
        <p>Test task</p>
      </div>
    </header>
  );
};
