type LoaderProps = {
  height?: number;
  width?: number;
}

const Loader = (props: LoaderProps) => {
  return (
    <div className="flex-center w-full">
      <img
        src="/assets/icons/loader.svg"
        alt="loader"
        width={props?.width? props?.width: 24}
        height={props?.height? props?.height: 24}
      ></img>
    </div>
  );
};

export default Loader;
