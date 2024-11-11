import React from "react";

interface ProfileCardProps {
  name: string;
  class?: string;
  badgeType: string;
  badgeIcon: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  class: className,
  badgeType,
  badgeIcon,
}) => {
  return (
    <div className="flex flex-col gap-2 justify-center px-0 py-5 mt-6 w-full rounded-3xl bg-stone-50 max-md:max-w-full">
      <div className="flex flex-col px-5 w-full max-md:max-w-full">
        <div
          data-layername="profileCard"
          className="flex gap-10 justify-between items-center w-full h-[39px]"
        >
          <div
            data-layername="profile"
            className="flex gap-2.5 items-center self-stretch my-auto"
          >
            <div
              data-layername="badge"
              className="flex flex-col self-stretch my-auto w-10 min-h-[40px]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c98610be79697f6bef72553e6803ce324ec2f777486ba9b390f0dc13029d3a?placeholderIfAbsent=true&apiKey=ff034d5512384628b4f5c1152f7ba035"
                alt="Profile badge"
                className="object-contain w-10 aspect-square"
              />
            </div>
            <div
              data-layername="name"
              className="flex flex-col justify-center self-stretch my-auto w-[102px]"
            >
              <div
                data-layername="charlieWhite"
                className="text-base font-medium leading-loose text-neutral-900"
              >
                {name}
              </div>
              {className && (
                <div
                  data-layername="class8B"
                  className="text-xs leading-tight text-zinc-500"
                >
                  {className}
                </div>
              )}
            </div>
          </div>
          <div
            data-layername="label3"
            className="flex gap-1 items-center self-stretch p-2 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-500 min-h-[32px] text-neutral-500"
          >
            <img
              loading="lazy"
              src={badgeIcon}
              alt={`${badgeType} icon`}
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            <div data-layername="status" className="self-stretch my-auto">
              {badgeType}
            </div>
          </div>
        </div>
      </div>
      <div
        data-layername="loremIpsumDolorSitAmetConsecteturMaurisIdATristiqueSitQuamSollicitudinEtiamIpsumSapienVitaeSemperEgetTemporSuspendissePharetraNequeVelitCondimentumDiamLoremImperdietHendreritCommodoMaecenas"
        className="flex-1 shrink gap-2.5 self-stretch px-5 mt-2 w-full text-sm leading-6 text-zinc-500 max-md:max-w-full"
      >
        Lorem ipsum dolor sit amet consectetur. Mauris id a tristique sit. Quam
        sollicitudin etiam ipsum sapien. Vitae semper eget tempor suspendisse
        pharetra neque velit condimentum diam. Lorem imperdiet hendrerit commodo
        maecenas.
      </div>
    </div>
  );
};

export default ProfileCard;
