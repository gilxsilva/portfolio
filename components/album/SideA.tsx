import { siteData } from '@/lib/data';
import { Emphasis } from './Emphasis';
import { GoldChip } from './GoldRecord';
import { SideHeading } from './SideHeading';
import { Track } from './Track';

export function SideA() {
  const jobs = siteData.experience;
  return (
    <section id="work" tabIndex={-1} aria-labelledby="work-heading" className="py-20 outline-none sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SideHeading id="work-heading" side="Side A" title="Work" aside={`${jobs.length} tracks · 2024 to 2026`} />
        <ol>
          {jobs.map((job, i) => (
            <li key={`${job.company}-${job.period}`}>
              <Track
                number={i + 1}
                title={job.role}
                subtitle={job.company}
                credits={[job.team, `feat. ${job.stack.join(', ')}`].filter(Boolean).join(' · ')}
                duration={job.period}
                defaultOpen={i === 0}
              >
                <ul className="list-disc space-y-2 pl-5 leading-relaxed text-ink-soft marker:text-label">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Emphasis text={bullet} />
                    </li>
                  ))}
                </ul>
                {job.note && (
                  <p className="mt-4">
                    <GoldChip>{job.note}</GoldChip>
                  </p>
                )}
              </Track>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
