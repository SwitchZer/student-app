"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#F9F9F9]">
      <div className="flex flex-wrap justify-between w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center p-10 basis-0 bg-stone-50 min-w-[240px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap gap-3 justify-center items-end py-6 pr-3 pl-6 w-full bg-white rounded-3xl shadow-sm max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                  <div className="flex flex-col gap-2 justify-center p-4 w-full bg-white rounded-3xl shadow-sm max-md:max-w-full">
                    <div className="flex gap-5 items-center w-full max-md:max-w-full">
                      <div className="self-stretch my-auto w-5 text-base font-medium leading-loose text-black-102">
                        4
                      </div>
                      <div className="flex gap-2 items-center self-stretch my-auto">
                        <div className="flex gap-2.5 items-center self-stretch my-auto w-10">
                          <div className="flex flex-col items-start self-stretch my-auto w-[45px]">
                            <Image
                              loading="lazy"
                              src="/images/student/smileplus.svg"
                              className="object-contain mt-1 w-10 rounded-full aspect-square"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                        <div className="self-stretch my-auto text-base font-medium leading-loose whitespace-nowrap text-black-102">
                          Name
                        </div>
                      </div>
                      <div className="flex gap-1 justify-center items-center self-stretch px-1.5 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap rounded-lg border border-solid bg-stone-50 border-neutral-200 text-black-102">
                        <Image
                          loading="lazy"
                          src="/images/student/coin.png"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                          width={21}
                          height={21}
                        />
                        <div className="self-stretch my-auto">0</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-center p-4 mt-10 w-full bg-white rounded-2xl max-md:max-w-full">
                    <div className="flex gap-4 w-full max-md:max-w-full">
                      <div className="flex flex-col flex-1 shrink basis-0">
                        <div className="flex flex-col items-center w-full mb-auto h-full justify-end">
                          <div className="flex gap-2.5 items-center w-10">
                            <div className="flex self-stretch my-auto min-h-[40px] w-[45px]" />
                          </div>
                          <div className="flex flex-col justify-center items-center mt-1 font-medium whitespace-nowrap">
                            <Image
                              loading="lazy"
                              src="/images/student/smileplus.svg"
                              className="object-contain mt-1 w-10 rounded-full aspect-square"
                              width={40}
                              height={40}
                            />
                            <div className="text-base leading-loose text-black-102">
                              Alexandra
                            </div>
                            <div className="flex gap-1 justify-center items-center px-1.5 py-1 text-xs leading-none rounded-lg border border-solid bg-stone-50 border-neutral-200 text-black-102">
                              <Image
                                loading="lazy"
                                src="/images/student/coin.png"
                                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                                width={21}
                                height={21}
                              />
                              <div className="self-stretch my-auto">11</div>
                            </div>
                          </div>
                        </div>
                        <div className="gap-2.5 pb-2 mt-3 w-full text-5xl font-medium leading-tight text-center text-white whitespace-nowrap bg-[#E3657D] rounded-2xl min-h-[140px] max-md:text-4xl flex items-end justify-center">
                          2
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 shrink font-medium whitespace-nowrap basis-0">
                        <div className="flex flex-col items-center w-full">
                          <Image
                            loading="lazy"
                            src="/images/student/Icon/crown.png"
                            className="object-contain w-4 aspect-square"
                            width={16}
                            height={16}
                          />
                          <Image
                            loading="lazy"
                            src="/images/student/smileplus.svg"
                            className="object-contain mt-1 w-10 rounded-full aspect-square"
                            width={40}
                            height={40}
                          />
                          <div className="mt-1 text-base leading-7 text-center text-black-102">
                            Momen
                            <br />
                            (Me)
                          </div>
                          <div className="flex gap-1 justify-center items-center px-1.5 py-1 mt-1 text-xs leading-none rounded-lg border border-solid bg-stone-50 border-neutral-200 text-black-102">
                            <Image
                              loading="lazy"
                              src="/images/student/coin.png"
                              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                              width={21}
                              height={21}
                            />
                            <div className="self-stretch my-auto">12</div>
                          </div>
                        </div>
                        <div className="gap-2.5 pb-2 mt-3 w-full text-5xl leading-tight text-center text-white bg-[#F6C483] rounded-2xl min-h-[190px] max-md:text-4xl flex items-end justify-center">
                          1
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 shrink basis-0">
                        <div className="flex flex-col items-center w-full mb-auto h-full justify-end">
                          <div className="flex gap-2.5 items-center w-10">
                            <div className="flex self-stretch my-auto min-h-[40px] w-[45px]" />
                          </div>
                          <div className="flex flex-col justify-center items-center mt-1 font-medium whitespace-nowrap">
                            <Image
                              loading="lazy"
                              src="/images/student/smileplus.svg"
                              className="object-contain mt-1 w-10 rounded-full aspect-square"
                              width={40}
                              height={40}
                            />
                            <div className="text-base leading-loose text-black-102">
                              Regulus
                            </div>
                            <div className="flex gap-1 justify-center items-center px-1.5 py-1 text-xs leading-none rounded-lg border border-solid bg-stone-50 border-neutral-200 text-black-102">
                              <Image
                                loading="lazy"
                                src="/images/student/coin.png"
                                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                                width={21}
                                height={21}
                              />
                              <div className="self-stretch my-auto">11</div>
                            </div>
                          </div>
                        </div>
                        <div className="gap-2.5 pb-2 mt-3 w-full text-5xl font-medium leading-tight text-center text-white whitespace-nowrap bg-[#61D4D5] rounded-2xl min-h-[110px] max-md:text-4xl flex items-end justify-center">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-10 w-full max-md:max-w-full">
                    <div className="flex flex-col gap-2 justify-center p-4 w-full bg-white rounded-3xl shadow-sm max-md:max-w-full">
                      <div className="flex gap-5 items-center w-full max-md:max-w-full">
                        <div className="self-stretch my-auto w-5 text-base font-medium leading-loose text-black-102">
                          4
                        </div>
                        <div className="flex gap-3 items-center self-stretch my-auto">
                          <div className="flex gap-2.5 items-center self-stretch my-auto w-10">
                            <div className="flex flex-col items-start self-stretch my-auto w-[45px]">
                              <div className="flex shrink-0 w-full h-10 rounded-full bg-zinc-100 bg-opacity-80 fill-zinc-100 fill-opacity-80" />
                            </div>
                          </div>
                          <div className="self-stretch my-auto text-base font-medium leading-loose text-black-102">
                            Sidney{" "}
                          </div>
                        </div>
                        <div className="flex gap-1 justify-center items-center self-stretch px-1.5 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap rounded-lg border border-solid bg-stone-50 border-neutral-200 text-black-102">
                          <Image
                            loading="lazy"
                            src="/images/student/coin.png"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                            width={21}
                            height={21}
                          />
                          <div className="self-stretch my-auto">7</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center p-4 mt-3 w-full bg-white rounded-3xl shadow-sm max-md:max-w-full">
                      <div className="flex gap-5 items-center w-full max-md:max-w-full">
                        <div className="self-stretch my-auto w-5 text-base font-medium leading-loose text-black-102">
                          5
                        </div>
                        <div className="flex gap-3 items-center self-stretch my-auto">
                          <div className="flex gap-2.5 items-center self-stretch my-auto w-10">
                            <div className="flex flex-col items-start self-stretch my-auto w-[45px]">
                              <div className="flex shrink-0 w-full h-10 rounded-full bg-zinc-100 bg-opacity-80 fill-zinc-100 fill-opacity-80" />
                            </div>
                          </div>
                          <div className="self-stretch my-auto text-base font-medium leading-loose whitespace-nowrap text-black-102">
                            Rupi
                          </div>
                        </div>
                        <div className="flex gap-1 justify-center items-center self-stretch px-1.5 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap rounded-lg border border-solid bg-stone-50 border-neutral-200 text-black-102">
                          <Image
                            loading="lazy"
                            src="/images/student/coin.png"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                            width={21}
                            height={21}
                          />
                          <div className="self-stretch my-auto">5</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center p-4 mt-3 w-full bg-white rounded-3xl shadow-sm max-md:max-w-full">
                      <div className="flex gap-5 items-center w-full max-md:max-w-full">
                        <div className="self-stretch my-auto w-5 text-base font-medium leading-loose text-black-102">
                          5
                        </div>
                        <div className="flex gap-3 items-center self-stretch my-auto">
                          <div className="flex gap-2.5 items-center self-stretch my-auto w-10">
                            <div className="flex flex-col items-start self-stretch my-auto w-[45px]">
                              <div className="flex shrink-0 w-full h-10 rounded-full bg-zinc-100 bg-opacity-80 fill-zinc-100 fill-opacity-80" />
                            </div>
                          </div>
                          <div className="self-stretch my-auto text-base font-medium leading-loose whitespace-nowrap text-black-102">
                            Philip
                          </div>
                        </div>
                        <div className="flex gap-1 justify-center items-center self-stretch px-1.5 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap rounded-lg border border-solid bg-stone-50 border-neutral-200 text-black-102">
                          <Image
                            loading="lazy"
                            src="/images/student/coin.png"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                            width={21}
                            height={21}
                          />
                          <div className="self-stretch my-auto">4</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center p-4 mt-3 w-full bg-white rounded-3xl shadow-sm max-md:max-w-full">
                      <div className="flex gap-5 items-center w-full max-md:max-w-full">
                        <div className="self-stretch my-auto w-5 text-base font-medium leading-loose text-black-102">
                          5
                        </div>
                        <div className="flex gap-3 items-center self-stretch my-auto">
                          <div className="flex gap-2.5 items-center self-stretch my-auto w-10">
                            <div className="flex flex-col items-start self-stretch my-auto w-[45px]">
                              <div className="flex shrink-0 w-full h-10 rounded-full bg-zinc-100 bg-opacity-80 fill-zinc-100 fill-opacity-80" />
                            </div>
                          </div>
                          <div className="self-stretch my-auto text-base font-medium leading-loose whitespace-nowrap text-black-102">
                            Martina
                          </div>
                        </div>
                        <div className="flex gap-1 justify-center items-center self-stretch px-1.5 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap rounded-lg border border-solid bg-stone-50 border-neutral-200 text-black-102">
                          <Image
                            loading="lazy"
                            src="/images/student/coin.png"
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                            width={21}
                            height={21}
                          />
                          <div className="self-stretch my-auto">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-1.5 rounded-lg">
                  <div className="flex flex-col pb-40 rounded-lg bg-neutral-200 bg-opacity-90 max-md:pb-24">
                    <div className="flex shrink-0 mb-0 rounded-lg bg-neutral-600 h-[323px] max-md:mb-2.5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex flex-col flex-1 w-full max-md:max-w-full">
                <div className="text-2xl font-medium leading-none text-black-103">
                  Appreciation corner
                </div>
                <div className="flex flex-col justify-center p-6 mt-4 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 items-start w-full max-md:max-w-full">
                    <div className="flex flex-col flex-1 shrink justify-center px-6 pt-6 pb-5 w-full bg-[#FAF5EC] rounded-3xl border border-[#F6C483] border-solid shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
                      <div className="flex flex-col justify-center w-full text-center">
                        <div className="w-full text-2xl font-medium leading-none text-black-102">
                          Send your appreciation now
                        </div>
                        <div className="mt-2 w-full text-sm leading-6 text-black-102">
                          Celebrate and recognize outstanding contributions from
                          your peers and teachers
                        </div>
                      </div>
                      <div className="flex gap-3 justify-center items-center mt-4 w-full">
                        <Image
                          loading="lazy"
                          src="/images/student/smileplus.svg"
                          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                          width={40}
                          height={40}
                        />
                        <Image
                          loading="lazy"
                          src="/images/student/smileplus.svg"
                          className="object-contain shrink-0 self-stretch my-auto w-8 rounded-full aspect-square"
                          width={32}
                          height={32}
                        />
                        <Image
                          loading="lazy"
                          src="/images/student/smileplus.svg"
                          className="object-contain shrink-0 self-stretch my-auto aspect-[1.02] w-[55px]"
                          width={55}
                          height={55}
                        />
                        <Image
                          loading="lazy"
                          src="/images/student/smileplus.svg"
                          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                          width={40}
                          height={40}
                        />
                        <Image
                          loading="lazy"
                          src="/images/student/smileplus.svg"
                          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                          width={40}
                          height={40}
                        />
                        <Image
                          loading="lazy"
                          src="/images/student/smileplus.svg"
                          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                          width={40}
                          height={40}
                        />
                        <Image
                          loading="lazy"
                          src="/images/student/smileplus.svg"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square min-h-[34px] w-[34px]"
                          width={34}
                          height={34}
                        />
                        <Image
                          loading="lazy"
                          src="/images/student/smileplus.svg"
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[54px]"
                          width={54}
                          height={54}
                        />
                      </div>
                      <div className="flex gap-2.5 justify-center items-center self-center px-6 py-4 mt-4 w-32 max-w-full text-sm font-medium leading-loose text-center text-white bg-stone-950 rounded-[100px] max-md:px-5">
                        <div className="gap-1.5 self-stretch my-auto">
                          <Button className="bg-black-102 text-white px-9 py-6 rounded-full hover:bg-gray-800">
                            Send Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-center px-0 py-5 mt-6 w-full rounded-3xl bg-stone-50 max-md:max-w-full">
                    <div className="flex flex-col px-5 w-full max-md:max-w-full">
                      <div className="flex gap-10 justify-between items-center w-full h-[39px]">
                        <div className="flex gap-2.5 items-center self-stretch my-auto">
                          <div className="flex flex-col self-stretch my-auto w-10 min-h-[40px]">
                            <Image
                              loading="lazy"
                              src="/images/student/smileplus.svg"
                              className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full"
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="flex flex-col justify-center self-stretch my-auto w-[102px]">
                            <div className="text-base font-medium leading-loose text-black-102">
                              Charlie White
                            </div>
                            <div className="text-xs leading-tight text-gray-light-101">
                              CLASS 8B
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 items-center self-stretch p-2 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-500 min-h-[32px] text-black-102">
                          <Image
                            loading="lazy"
                            src="/images/student/Icon/checkmark-badge-01.svg"
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                            width={16}
                            height={16}
                          />
                          <div className="self-stretch my-auto">Risk-taker</div>
                        </div>
                      </div>
                      <div className="flex-1 shrink gap-2.5 self-stretch px-5 mt-2 w-full text-sm leading-6 text-gray-light-101 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Mauris id a
                        tristique sit. Quam sollicitudin etiam ipsum sapien.
                        Vitae semper eget tempor suspendisse pharetra neque
                        velit condimentum diam. Lorem imperdiet hendrerit
                        commodo maecenas.
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center px-0 py-5 mt-6 w-full rounded-3xl bg-stone-50 max-md:max-w-full">
                      <div className="flex flex-col px-5 w-full max-md:max-w-full">
                        <div className="flex gap-10 justify-between items-center w-full h-[39px]">
                          <div className="flex gap-2.5 items-center self-stretch my-auto">
                            <div className="flex flex-col self-stretch my-auto w-10 min-h-[40px]">
                              <Image
                                loading="lazy"
                                src="/images/student/smileplus.svg"
                                className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full"
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="flex flex-col justify-center self-stretch my-auto w-[102px]">
                              <div className="text-base font-medium leading-loose text-black-101">
                                Charlie White
                              </div>
                              <div className="text-xs leading-tight text-gray-light-101">
                                CLASS 8B
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1 items-center self-stretch p-2 py-1 my-auto text-xs font-medium leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-500 min-h-[32px] text-black-102">
                            <Image
                              loading="lazy"
                              src="/images/student/Icon/checkmark-badge-01.svg"
                              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                              width={16}
                              height={16}
                            />
                            <div className="self-stretch my-auto">
                              Knowledgeable
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 shrink gap-2.5 self-stretch px-5 mt-2 w-full text-sm font-normal leading-6 text-gray-light-102 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Mauris id a
                        tristique sit. Quam sollicitudin etiam ipsum sapien.
                        Vitae semper eget tempor suspendisse pharetra neque
                        velit condimentum diam. Lorem imperdiet hendrerit
                        commodo maecenas.
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center px-0 py-5 mt-6 w-full rounded-3xl bg-stone-50 max-md:max-w-full">
                      <div className="flex flex-col px-5 w-full max-md:max-w-full">
                        <div className="flex gap-10 justify-between items-center w-full h-[39px]">
                          <div className="flex gap-2.5 items-center self-stretch my-auto">
                            <div className="flex flex-col self-stretch my-auto w-10 min-h-[40px]">
                              <Image
                                loading="lazy"
                                src="/images/student/smileplus.svg"
                                className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full"
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="flex flex-col justify-center self-stretch my-auto w-[102px]">
                              <div className="text-base font-medium leading-loose text-black-101">
                                Charlie White
                              </div>
                              <div className="text-xs leading-tight text-gray-light-101">
                                CLASS 8B
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1 items-center self-stretch px-2 py-1 pt-2 my-auto text-xs font-medium leading-none whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-500 min-h-[32px] text-black-102">
                            <Image
                              loading="lazy"
                              src="/images/student/Icon/checkmark-badge-01.svg"
                              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                              width={16}
                              height={16}
                            />
                            <div className="self-stretch my-auto">
                              Responsible
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 shrink gap-2.5 self-stretch px-5 mt-2 w-full text-sm font-normal leading-6 text-gray-light-102 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. Mauris id a
                        tristique sit. Quam sollicitudin etiam ipsum sapien.
                        Vitae semper eget tempor suspendisse pharetra neque
                        velit condimentum diam. Lorem imperdiet hendrerit
                        commodo maecenas.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1.5 rounded-lg">
                    <div className="flex flex-col pb-72 rounded-lg bg-neutral-200 bg-opacity-90 max-md:pb-24">
                      <div className="flex shrink-0 mb-0 h-48 rounded-lg bg-neutral-600 max-md:mb-2.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
