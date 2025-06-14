"use client";
import React from "react";
import WorkCard from "./WorkCard";
import OtherWorkCard from "./OtherWorkCard";

import { Heading, SimpleGrid, Center, Box } from "@chakra-ui/react";
import { otherWorkData, workData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";
import './../../i18n';
import { useTranslation } from 'react-i18next';

const Work = () => {
    const [t, i18n ] = useTranslation();
      React.useEffect(() => {
        if (!localStorage.getItem('i18nextLng')) {
          i18n.changeLanguage('fr'); // Force le français si aucune langue n'est définie
        }
      }, [i18n]);

  return (
    <>
      <Center>
        <Box width={["80vw", "80vw", "79vw"]} height="100%">
          <Heading className="sub-heading" size="md" my={3}>
            {t('professionalex')}
          </Heading>
          <RevealWrapper className="load-hidden" delay={300}>
            <SimpleGrid>
              {workData.map((data, index) => {
                return <WorkCard {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>
          <Heading className="sub-heading" size="md" my={3}>
          {t('otherex')}
          </Heading>
          <RevealWrapper className="load-hidden" delay={300}>
            <SimpleGrid>
              {otherWorkData.map((data, index) => {
                return <OtherWorkCard {...{ data }} key={index} />;
              })}
            </SimpleGrid>
          </RevealWrapper>

        </Box>
      </Center>
    </>
  );
};

export default Work;
