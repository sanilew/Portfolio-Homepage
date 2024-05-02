import Hero from '@/components/Hero';
import Highlight from '@/components/Highlight';
import ThumbEbanx from '@/app/projects/ebanx/imgs/thumb-ebanx.jpg';
import ThumbCatho from '@/app/projects/catho/imgs/thumb-catho.jpg';
import Card from '@/components/Card';
import ThumbDigimonList from '@/app/projects/frontprojects/imgs/thumb-digimonlist.jpg';
import ThumbPersonalWebsite from '@/app/projects/frontprojects/imgs/thumb-personalwebsite.jpg';
import ThumbListin from '@/app/projects/frontprojects/imgs/thumb-listin.jpg';

import AnimatedBlock from '@/components/AnimatedBlock';
import Image from 'next/image';
import routes from '@/routes';

export default function Home() {
  return (
    <>
      <Hero
        title="Hi, I'm Anil Upadhyay"
        subtitle="A Fullstack Developer with 2.5 years of professional experience"
        animate
      />

      {/* Project Main Grid */}
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Highlighted Projects
        </h2>
        <div className="flex w-full flex-col items-center gap-x-3 gap-y-16 md:grid md:w-auto md:grid-cols-[repeat(2,_auto)] md:items-start md:gap-12 lg:flex lg:gap-16">
          <Highlight
            img={ThumbEbanx}
            title="Automated Refund Status Flow"
            subtitle="A case on how I improved the user's experience on a Help Center automating the access to information."
            href={routes.projects.ebanx.pathname}
            tags={['Product Design', 'Responsive Website']}
            className="md:w-auto"
          />
          <Highlight
            img={ThumbCatho}
            title="Redesigning a Mobile App Experience"
            subtitle="A case on how redesigning the B2C iOS and Android apps improved user feedback and experience."
            href={routes.projects.catho.pathname}
            tags={['Product Design', 'Native Mobile App']}
            reverse
            className="md:w-auto"
          />
        </div>
      </div>

      {/* Project Secondary Grid */}
      <div className="mt-20 flex w-full flex-col items-center xl:mt-32">
        <AnimatedBlock
          className="grid w-full grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-14 md:gap-6"
          direction="top"
          delayed
        >
          <Card
            title="Listin - image list generator"
            img={ThumbListin}
            links={[
              {
                children: 'View here',
                href: '/',
                target: '_blank',
              },
            ]}
            tags={['Front-end Development']}
          />
          <Card
            title="Personal Website"
            img={ThumbPersonalWebsite}
            links={[
              {
                children: 'View here',
                href: '/',
                target: '_blank',
              },
            ]}
            tags={['Front-end Development']}
          />
          <Card
            title="The Digimon List"
            img={ThumbDigimonList}
            links={[
              {
                children: 'View here',
                href: '/',
                target: '_blank',
              },
            ]}
            tags={['Front-end Development']}
          />
        </AnimatedBlock>
      </div>

      {/* About me section */}
      <div className="flex w-full flex-col items-center px-4">
        <hr className="mb-20 mt-20 w-40 rounded-sm border-2 border-teal-400 lg:mt-32" />

        <div className="mb-20 mt-8 flex max-w-[560px] flex-col items-center">
          <h3 className="text-3xl font-bold text-white">About me</h3>
          <p className="mt-8 text-center leading-7 text-white">
            I have more than 2.5 years of experience with technology, working
            with web and mobile applications for service based companies like
            M/S MMIE etc.
          </p>
        </div>
      </div>
    </>
  );
}
