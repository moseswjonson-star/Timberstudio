import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/woodworkingData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Eye, ArrowUpRight, Wrench, Clock, Plus, FolderKanban, Calendar, Edit3, X, Check } from 'lucide-react';

interface PortfolioSectionProps {
  projects?: Project[];
  selectedCategory?: ProjectCategory;
  onCategoryChange?: (category: ProjectCategory) => void;
  onOpenPublisher?: () => void;
  onUpdateProject?: (project: Project) => void;
  onSelectGearProduct?: (productId: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects = PORTFOLIO_PROJECTS,
  selectedCategory = 'all',
  onCategoryChange,
  onOpenPublisher,
  onUpdateProject,
  onSelectGearProduct
}) => {
  const [internalCategory, setInternalCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Edit form state
  const [editBuildTime, setEditBuildTime] = useState('');
  const [editDurationDates, setEditDurationDates] = useState('');
  const [editStatus, setEditStatus] = useState<'Planning' | 'In Progress' | 'Finishing' | 'Completed'>('Completed');

  const activeCat = selectedCategory || internalCategory;

  const handleCategoryClick = (catId: ProjectCategory) => {
    if (onCategoryChange) {
      onCategoryChange(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const openTimelineEditor = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    setEditingProject(project);
    setEditBuildTime(project.buildTime || '40 Shop Hours');
    setEditDurationDates(project.durationDates || 'Oct 2025 – Nov 2025');
    setEditStatus(project.timelineStatus || 'Completed');
  };

  const handleSaveTimeline = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject || !onUpdateProject) return;
    const updated: Project = {
      ...editingProject,
      buildTime: editBuildTime,
      durationDates: editDurationDates,
      timelineStatus: editStatus
    };
    onUpdateProject(updated);
    setEditingProject(null);
  };

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Studio Works' },
    { id: 'furniture', label: 'Fine Furniture' },
    { id: 'joinery', label: 'Timber Joinery' },
    { id: 'shop', label: 'Workshop Builds' },
    { id: 'turning', label: 'Lathe & Turning' },
    { id: 'diy', label: 'DIY Builds & Plans' },
  ];

  const filteredProjects = activeCat === 'all'
    ? projects
    : projects.filter(p => p.category === activeCat);

  return (
    <section id="portfolio" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 dark:text-amber-400 mb-2">
              <FolderKanban className="w-4 h-4" />
              <span>Portfolio & Archive · Selected Commissions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight">
              Bespoke Furniture & Joinery
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-2xl">
              Each piece is designed around the unique grain geometry of the timber blank, shaped with Japanese hand saws and planes, and constructed with traditional mortise, tenon, and dovetail joinery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {onOpenPublisher && (
              <button
                onClick={onOpenPublisher}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md shadow-xs transition-colors shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Post New Project</span>
              </button>
            )}

            {/* Interactive Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 dark:bg-stone-900 rounded-lg border border-stone-300/60 dark:border-stone-800">
              {categories.map((cat) => {
                const isActive = activeCat === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                      isActive
                        ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 font-semibold shadow-xs'
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-lg bg-stone-100/50 dark:bg-stone-900/40 border border-stone-200/90 dark:border-stone-800 overflow-hidden hover:border-amber-600/60 dark:hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom effect */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-200 dark:bg-stone-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Kicker Label */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-white/90">
                    <div className="flex items-center gap-1">
                      <span className="bg-stone-950/60 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                        {project.category}
                      </span>
                      {project.isUserPost && (
                        <span className="bg-amber-500 text-stone-950 font-bold px-1.5 py-0.5 rounded-xs">
                          My Build
                        </span>
                      )}
                    </div>
                    <span className="bg-stone-950/60 backdrop-blur-xs px-2 py-0.5 rounded-xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {project.buildTime}
                    </span>
                  </div>

                  {/* Timeline / Duration Badge & Edit Button on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-stone-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] text-amber-300 font-medium flex items-center gap-1.5 border border-amber-500/30">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>{project.durationDates || 'Est. 4-6 Weeks Schedule'}</span>
                    </div>

                    <button
                      onClick={(e) => openTimelineEditor(e, project)}
                      className="px-2.5 py-1 rounded-md bg-stone-900/90 hover:bg-amber-600 text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors border border-white/20 shadow-sm"
                      title="Edit Build Timeline & Duration Dates"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Timeline</span>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 text-left">
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2">
                    <span className="font-mono text-amber-800 dark:text-amber-400 font-medium">
                      {project.dimensions}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider">
                      {project.clientOrLocation}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Wood species tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.timberSpecies.slice(0, 3).map((species, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded-xs bg-stone-200/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono"
                      >
                        {species}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 bg-stone-50 dark:bg-stone-900/80 border-t border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  <span>{project.joineryMethods[0] || 'Traditional Joinery'}</span>
                </span>
                
                <span className="font-semibold text-amber-800 dark:text-amber-400 flex items-center gap-1 group-hover:underline">
                  <span>Explore Build</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-stone-100/50 dark:bg-stone-900/30 rounded-xl border border-dashed border-stone-300 dark:border-stone-800">
            <FolderKanban className="w-8 h-8 mx-auto text-stone-400 mb-2" />
            <p className="text-stone-600 dark:text-stone-300 text-sm font-semibold">
              No projects match this category.
            </p>
            {onOpenPublisher && (
              <button
                onClick={onOpenPublisher}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-md"
              >
                <Plus className="w-4 h-4" />
                <span>Post the First Project Here</span>
              </button>
            )}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectGearProduct={onSelectGearProduct}
      />

      {/* Timeline Editor Modal */}
      {editingProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setEditingProject(null)}
        >
          <div 
            className="w-full max-w-md bg-[#faf7f2] dark:bg-[#181716] rounded-xl shadow-2xl border border-stone-200 dark:border-stone-800 p-6 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEditingProject(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
              <Calendar className="w-4 h-4" />
              <span>Project Schedule & Build Timeline</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Edit Timeline: {editingProject.title}
            </h3>

            <form onSubmit={handleSaveTimeline} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Estimated Build Time / Hours
                </label>
                <input
                  type="text"
                  value={editBuildTime}
                  onChange={(e) => setEditBuildTime(e.target.value)}
                  placeholder="e.g. 94 Shop Hours"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Project Duration Dates / Schedule Range
                </label>
                <input
                  type="text"
                  value={editDurationDates}
                  onChange={(e) => setEditDurationDates(e.target.value)}
                  placeholder="e.g. Oct 12 – Nov 24, 2025"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Build Status Phase
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Planning">Planning & Timber Selection</option>
                  <option value="In Progress">In Progress (Milling & Joinery)</option>
                  <option value="Finishing">Finishing & Curing</option>
                  <option value="Completed">Completed & Delivered</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Timeline</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
