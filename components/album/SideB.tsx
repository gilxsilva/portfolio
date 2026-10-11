import Image from 'next/image';
import { siteData, type Project } from '@/lib/data';
import { Emphasis } from './Emphasis';
import { GoldChip } from './GoldRecord';
import { SideHeading } from './SideHeading';
import { Track } from './Track';

function ProjectArt({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={480}
        height={480}
        className="aspect-square w-full rounded-lg border border-line object-cover"
      />
    );
  }
  return (
    <div
      className="relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg p-4 text-paper"
      style={{ background: project.color }}
      aria-hidden="true"
    >
      <span className="vinyl absolute -top-1/4 -right-1/4 w-3/4 opacity-90" style={{ aspectRatio: 1 }} />
      <span className="relative font-display text-2xl font-bold leading-none">{project.title}</span>
      <span className="relative mt-1 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">{project.context}</span>
    </div>
  );
}

const linkCls = 'text-sm font-bold text-label-ink underline underline-offset-4 hover:text-ink';

export function SideB() {
  const { projects, bonusTracks } = siteData;
  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-heading" className="py-20 outline-none sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SideHeading
          id="projects-heading"
          side="Side B"
          title="Projects"
          aside={`${projects.length} tracks + ${bonusTracks.length} bonus`}
        />
        <ol>
          {projects.map((project, i) => (
            <li key={project.id}>
              <Track
                number={i + 1}
                title={project.title}
                subtitle={project.tag}
                credits={[project.context, project.team, project.stack && `feat. ${project.stack.join(', ')}`].filter(Boolean).join(' · ')}
                duration={project.year}
                gold={Boolean(project.awards?.length)}
              >
                <div className="grid gap-6 sm:grid-cols-[11rem_1fr]">
                  <div className="max-w-[11rem]">
                    <ProjectArt project={project} />
                  </div>
                  <div>
                    <dl className="space-y-4">
                      {(
                        [
                          ['Problem', project.problem],
                          ['What I built', project.built],
                          ['Outcome', project.outcome],
                        ] as const
                      ).map(([label, text]) => (
                        <div key={label}>
                          <dt className="text-xs font-bold uppercase tracking-[0.18em] text-label-ink">{label}</dt>
                          <dd className="mt-1 leading-relaxed text-ink-soft">
                            <Emphasis text={text} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                    {project.awards && (
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Awards">
                        {project.awards.map((award) => (
                          <li key={award}>
                            <GoldChip>{award}</GoldChip>
                          </li>
                        ))}
                      </ul>
                    )}
                    {(project.liveUrl || project.githubUrl) && (
                      <p className="mt-5 flex gap-5">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                            Live ↗
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                            GitHub ↗
                          </a>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </Track>
            </li>
          ))}
        </ol>

        <h3 className="mt-12 text-xs font-bold uppercase tracking-[0.22em] text-muted">Bonus tracks</h3>
        <ol className="mt-2" start={projects.length + 1}>
          {bonusTracks.map((track, i) => (
            <li
              key={track.title}
              className="grid grid-cols-[2rem_1fr] items-baseline gap-x-3 border-b border-line py-4 sm:grid-cols-[2.75rem_1fr_auto] sm:gap-x-4"
            >
              <span className="font-display tabular-nums text-muted">
                {String(projects.length + i + 1).padStart(2, '0')}
              </span>
              <span>
                {track.href ? (
                  <a
                    href={track.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold underline decoration-line underline-offset-4 hover:text-label-ink hover:decoration-label"
                  >
                    {track.title} ↗
                  </a>
                ) : (
                  <span className="font-display font-bold">{track.title}</span>
                )}
                <span className="mt-0.5 block text-sm text-muted">
                  <Emphasis text={track.description} />
                </span>
              </span>
              <span className="col-start-2 mt-1 text-xs tabular-nums text-muted sm:col-start-auto sm:mt-0 sm:whitespace-nowrap sm:text-right sm:text-sm">
                {track.year} · {track.context}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-muted">
          Full liner notes, team credits, and attachments for every project live on{' '}
          <a
            href={siteData.links.linkedinProjects}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-label-ink underline underline-offset-4 hover:text-ink"
          >
            LinkedIn ↗
          </a>
        </p>
      </div>
    </section>
  );
}
