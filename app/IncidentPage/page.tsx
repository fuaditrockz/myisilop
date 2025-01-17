"use client";
import Webcam from "react-webcam";
import { Button, Input } from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";

export default function IncidentPage() {
  const [isCameraOn, setIsCameraOn] = useState(false);

  return (
    <div className="container h-screen w-screen">
      <Header title="Laporkan Insiden" />
      <main className="w-full h-full flex flex-col items-center justify-start py-10 px-5">
        <div className="w-full min-h-60 flex flex-col items-center justify-center gap-4">
          {isCameraOn ? (
            <Webcam
              height={1280}
              width={720}
              videoConstraints={{
                height: true
                  ? { ideal: 1080, max: 2160, min: 720 }
                  : { ideal: 1920, max: 3840, min: 1280 },
                width: true
                  ? { ideal: 1920, max: 3840, min: 1280 }
                  : { ideal: 1080, max: 2160, min: 720 },
              }}
            />
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center mb-10">
              <Image
                src="/warning.png"
                width={200}
                height={200}
                alt="warning"
                className="mb-5 h-20 w-20"
              />
              <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-lg font-bold text-center mb-0">
                  Beritahu Insiden
                </p>
                <p className="text-sm text-center">
                  Nyalakan kamera atau upload video
                  <br /> untuk memberitahu insiden
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex flex-row gap-4 justify-center items-center">
          <div className="w-auto h-auto bg-primary-500 hover:bg-primary-200 duration-300 rounded-xl relative py-2.5 px-4 flex flex-row gap-1 justify-start items-start text-center">
            <span className="icon-[material-symbols--arrow-upload-progress] size-5"></span>
            <p className="text-sm text-white font-semibold">Upload</p>
            <Input type="file" className="opacity-0 absolute z-10" />
          </div>
          <Button
            className="font-semibold"
            onPress={() => setIsCameraOn(!isCameraOn)}
            color="primary"
            size="md"
            startContent={
              isCameraOn ? (
                <span className="icon-[material-symbols--stop] text-red-500 size-5"></span>
              ) : (
                <span className="icon-[material-symbols--fiber-manual-record] text-red-500 size-5"></span>
              )
            }
          >
            {!isCameraOn ? "Ambil Video" : "Matikan Kamera"}
          </Button>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4 mt-10"></div>
      </main>
    </div>
  );
}
