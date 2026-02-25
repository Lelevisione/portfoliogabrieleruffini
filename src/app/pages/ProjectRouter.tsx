import { useParams } from 'react-router';
import { ProjectDetail } from './ProjectDetail';
import { CourtiBrillanti } from './projects/CourtiBrillanti';
import { StoriaGraphicDesign } from './projects/StoriaGraphicDesign';
import { CookingPython } from './projects/CookingPython';
import { LaCasinaBnB } from './projects/LaCasinaBnB';
import { Psicologa } from './projects/Psicologa';
import { PerIlTuoBene } from './projects/PerIlTuoBene';
import SeiVersilia from './projects/SeiVersilia';
import ShoppingApp from './projects/ShoppingApp';
import { DiCosaParla } from './projects/DiCosaParla';
import { AnticaSalumeriaVargiu } from './projects/AnticaSalumeriaVargiu';
import { Alveare } from './projects/Alveare';
import { CLI } from './projects/CLI';
import { Tarot } from './projects/Tarot';
import { OnDisplay } from './projects/OnDisplay';
import { MetaARFilters } from './projects/MetaARFilters';
import { Mudac } from './projects/Mudac';
import { ValentineApp } from './projects/ValentineApp';
import { Oracle } from './projects/Oracle';

interface ProjectRouterProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function ProjectRouter({ isMenuOpen, onToggleMenu }: ProjectRouterProps) {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : null;

  // Route to specific project pages
  switch (projectId) {
    case 2:
      return <Oracle isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 3:
      return <CourtiBrillanti isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 4:
      return <StoriaGraphicDesign isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 5:
      return <CookingPython isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 6:
      return <Psicologa isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 7:
      return <LaCasinaBnB isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 8:
      return <PerIlTuoBene isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 9:
      return <SeiVersilia isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 10:
      return <ShoppingApp isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 11:
      return <DiCosaParla isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 12:
      return <AnticaSalumeriaVargiu isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 13:
      return <Alveare isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 14:
      return <CLI isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 17:
      return <Tarot isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 1:
      return <OnDisplay isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 15:
      return <MetaARFilters isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 18:
      return <ValentineApp isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    case 16:
      return <Mudac isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
    // Add more specific project pages here as needed
    default:
      return <ProjectDetail isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />;
  }
}