export type SlideProps = {
  id: any;
  image: string;
  name: string;
  jobTitle: string;
  quote: string;
};

export const Slide = ({
  image,
  name,
  jobTitle,
  quote,

  translateX,
}: SlideProps & { translateX: number }) => {
  return (
    <div
      className="absolute inset-0 flex w-full items-center justify-center p-4 transition-transform duration-700 @container"
      style={{ transform: `translateX(${translateX}px)` }}
    >
      <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg ">
        <div className="flex w-full flex-col items-center gap-2 @md:flex-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} className="h-20 w-20" alt={name} />
          <div className="flex h-full flex-col justify-center">
            <div className="text-base">{name}</div>
            <div className="text-lg text-chocoup-dark-slate-blue">
              {jobTitle}
            </div>
          </div>
        </div>
        <div className="text-lg text-chocoup-dark-slate-blue">{quote}</div>
      </div>
    </div>
  );
};
