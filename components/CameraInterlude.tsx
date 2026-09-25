import { CameraXrayScene } from "@/components/CameraXrayScene";

export function CameraInterlude() {
  return (
    <section className="camera-interlude" aria-labelledby="camera-interlude-title">
      <div className="camera-interlude__stage">
        <CameraXrayScene />
        <div className="camera-interlude__copy">
          <span>MEDIA SYSTEM / 04</span>
          <h2 id="camera-interlude-title">Frame by frame.</h2>
          <p>Scroll to inspect the machine behind the image.</p>
        </div>
        <div className="camera-interlude__measure camera-interlude__measure--left">OPTICAL ARRAY / 35MM</div>
        <div className="camera-interlude__measure camera-interlude__measure--right">X-RAY MODE / ACTIVE</div>
      </div>
    </section>
  );
}
