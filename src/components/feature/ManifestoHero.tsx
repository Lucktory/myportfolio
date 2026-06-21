import { CircularPhoto } from "@/components/feature/CircularPhoto";
import { Button } from "@/components/ui/Button";
import { aboutLead, aboutSubline, heroPhotos } from "@/data/about";
import { credentialsStrip, profile } from "@/data/profile";
import { getIcon } from "@/lib/icons";

const ArrowRight = getIcon("arrowRight");
const Mail = getIcon("mail");

export function ManifestoHero() {
  // Split the lead at " usually" so the second half can read italic/muted —
  // the source-of-truth string stays in `aboutLead`.
  const splitToken = " usually";
  const splitIdx = aboutLead.indexOf(splitToken);
  const headLine = splitIdx >= 0 ? aboutLead.slice(0, splitIdx) : aboutLead;
  const tailLine = splitIdx >= 0 ? aboutLead.slice(splitIdx) : "";

  return (
    <div className="flex flex-col gap-12 sm:gap-14 lg:gap-16">
      {/* Top section index — matches other sections' opener */}
      <div className="flex items-center gap-4 border-t-2 border-accent pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/85">
          §&nbsp;01<span className="text-muted-foreground"> /&nbsp;08</span>
        </span>
        <span aria-hidden className="h-px flex-1 bg-border-strong/60" />
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:inline">
          Portfolio · 2026
        </span>
      </div>

      {/* Main content grid — text left, photo cluster right on lg+ */}
      <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        {/* TEXT — order 2 on mobile so the photo cluster is the first thing seen */}
        <div className="order-2 flex flex-col gap-8 sm:gap-10 lg:order-1">
          <h1 className="font-display text-balance text-[2.5rem] font-normal leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]">
            {headLine}
            <span className="italic text-muted-foreground">{tailLine}</span>
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg lg:text-xl">
            {aboutSubline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button href="#work" size="md">
              See the work
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary" size="md">
              <Mail className="size-4" aria-hidden />
              Get in touch
            </Button>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Quiet credentials
            </span>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 sm:text-xs">
              {credentialsStrip.map((item, index) => (
                <li key={item} className="inline-flex items-center gap-4">
                  {item}
                  {index < credentialsStrip.length - 1 ? (
                    <span aria-hidden className="text-border-strong">
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {profile.location} · Open to remote engagements
          </p>
        </div>

        {/* PHOTO CLUSTER — order 1 on mobile (lead with the photos) */}
        <div className="order-1 lg:order-2">
          <HeroPhotoCluster />
        </div>
      </div>
    </div>
  );
}

function HeroPhotoCluster() {
  const { primary, satellites } = heroPhotos;

  return (
    <div className="w-full">
      {/* MOBILE & TABLET — primary centered, satellites in a row below */}
      <div className="flex flex-col items-center gap-5 lg:hidden">
        <CircularPhoto
          photo={primary}
          sizeClass="size-52 sm:size-64 md:size-72"
          emphasis="primary"
        />
        {satellites.length > 0 ? (
          <div className="flex items-center justify-center gap-4">
            {satellites.map((photo, index) => (
              <CircularPhoto
                key={`${photo.src}-${index}`}
                photo={photo}
                sizeClass="size-20 sm:size-24 md:size-28"
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* DESKTOP — asymmetric editorial cluster */}
      <div className="relative mx-auto hidden h-[500px] w-full max-w-[460px] lg:block">
        <CircularPhoto
          photo={primary}
          sizeClass="size-[300px]"
          emphasis="primary"
          className="absolute right-0 top-8"
        />
        {satellites[0] ? (
          <CircularPhoto
            photo={satellites[0]}
            sizeClass="size-[130px]"
            className="absolute left-0 top-20"
          />
        ) : null}
        {satellites[1] ? (
          <CircularPhoto
            photo={satellites[1]}
            sizeClass="size-[170px]"
            className="absolute bottom-4 left-12"
          />
        ) : null}
      </div>
    </div>
  );
}
