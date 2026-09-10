import { classicConfig } from "../components/templates/classic/config";
import { modernConfig } from "../components/templates/modern/config";
import { leftRightConfig } from "../components/templates/left-right/config";
import { timelineConfig } from "../components/templates/timeline/config";
import { minimalistConfig } from "../components/templates/minimalist/config";
import { elegantConfig } from "../components/templates/elegant/config";
import { creativeConfig } from "../components/templates/creative/config";
import { editorialConfig } from "../components/templates/editorial/config";
import { swissConfig } from "../components/templates/swiss/config";
import { TEMPLATE_SNAPSHOT_MANIFEST } from "../generated/templateSnapshotManifest";
import type { ResumeTemplate } from "../types/template";

export interface ArchiveRecord {
  id: string;
  title: string;
  en: string;
  department: string;
  category: string;
  date: string;
  lead: string;
  clearance: string;
  abstract: string;
  findings: string[];
  source: string;
  /** Template layout id, e.g. "classic" — links the record to a real template. */
  templateId: string;
  /** Public snapshot preview for the saved-archives grid. */
  snapshot: string;
}

// The terminal keeps its five-lane 3D layout; templates are grouped into five
// style lanes. The first record sits in lane 2 so the default camera framing
// (lane focus 2 / row 12) lands on it.
const TEMPLATE_COLUMNS = [
  "双栏布局",
  "时间轴",
  "经典风格",
  "极简主义",
  "艺术创意",
] as const;

interface TemplateCopy {
  /** Name shown on the card, identical to the templates page (dashboard.templates). */
  title: string;
  /** Intro text, identical to the templates page description. */
  abstract: string;
  en: string;
  department: string;
  category: (typeof TEMPLATE_COLUMNS)[number];
}

const TEMPLATE_COPY: Record<string, TemplateCopy> = {
  classic: {
    title: "经典模板",
    abstract: "传统简约的简历布局，适合大多数求职场景",
    en: "CLASSIC",
    department: "单栏经典布局",
    category: "经典风格",
  },
  modern: {
    title: "两栏布局",
    abstract: "经典两栏，突出个人特色",
    en: "MODERN",
    department: "双栏布局",
    category: "双栏布局",
  },
  "left-right": {
    title: "模块标题背景色",
    abstract: "模块标题背景鲜明，突出美观特色",
    en: "LEFT / RIGHT",
    department: "双栏 · 标题色块",
    category: "双栏布局",
  },
  timeline: {
    title: "时间轴布局",
    abstract: "时间轴风格，突出经历的时间顺序",
    en: "TIMELINE",
    department: "时间轴布局",
    category: "时间轴",
  },
  minimalist: {
    title: "极简模板",
    abstract: "大面积留白，干净纯粹的排版风格",
    en: "MINIMALIST",
    department: "单栏极简布局",
    category: "极简主义",
  },
  elegant: {
    title: "优雅模板",
    abstract: "居中标题单列设计，具有高级感的分隔线",
    en: "ELEGANT",
    department: "单栏居中布局",
    category: "经典风格",
  },
  creative: {
    title: "创意模板",
    abstract: "视觉错落设计，灵动活泼展现个性",
    en: "CREATIVE",
    department: "错落创意布局",
    category: "艺术创意",
  },
  editorial: {
    title: "画报风模板",
    abstract: "大号精美衬线体与窄体无衬线的完美结合，极具奢华感",
    en: "EDITORIAL",
    department: "画报衬线排版",
    category: "艺术创意",
  },
  swiss: {
    title: "瑞士美学",
    abstract: "极具艺术感的包豪斯国际排版，超粗字重对比与几何色块点缀，彰显理性与高级",
    en: "SWISS STYLE",
    department: "瑞士几何排版",
    category: "极简主义",
  },
};

const SECTION_NAMES: Record<string, string> = {
  skills: "专业技能",
  experience: "工作经验",
  projects: "项目经历",
  education: "教育经历",
  selfEvaluation: "自我评价",
  certificates: "证书作品",
  basic: "基本信息",
  languages: "语言能力",
  custom: "自定义模块",
};

const BASIC_LAYOUTS: Record<string, string> = {
  left: "基础信息居左",
  center: "基础信息居中",
  right: "基础信息居右",
};

function templateRecord(template: ResumeTemplate, index: number): ArchiveRecord {
  const copy = TEMPLATE_COPY[template.id];
  return {
    id: `T-${String(index + 1).padStart(3, "0")}`,
    title: copy.title,
    en: copy.en,
    department: copy.department,
    category: copy.category,
    date: "RESUME EDITOR 模板库",
    lead: "Resume Editor",
    clearance: "TEMPLATE",
    abstract: copy.abstract,
    findings: [
      `${copy.department}，${BASIC_LAYOUTS[template.basic.layout ?? "left"]}，模块顺序可自由调整。`,
      `默认主题色 ${template.colorScheme.primary.toUpperCase()}，支持在编辑器中自定义主题色与字体。`,
      `内置模块：${(template.availableSections ?? [])
        .map((section) => SECTION_NAMES[section] ?? section)
        .join("、")}。`,
    ],
    source: "/app/dashboard/templates",
    templateId: template.id,
    snapshot: (TEMPLATE_SNAPSHOT_MANIFEST.locales.zh as Record<string, string>)[
      template.id
    ],
  };
}

const TEMPLATES: ResumeTemplate[] = [
  classicConfig,
  modernConfig,
  leftRightConfig,
  timelineConfig,
  minimalistConfig,
  elegantConfig,
  creativeConfig,
  editorialConfig,
  swissConfig,
];

export const records: ArchiveRecord[] = TEMPLATES.map(templateRecord);
export const categories: string[] = ["全部模板", ...TEMPLATE_COLUMNS];
export const archiveColumns: readonly string[] = TEMPLATE_COLUMNS;

/** Look up a template config by its layout id, e.g. "classic". */
export function templateById(templateId: string) {
  return TEMPLATES.find((template) => template.id === templateId);
}

export function columnFiles(lane: number) {
  return records
    .map((record, index) => ({ record, index }))
    .filter(({ record }) => record.category === archiveColumns[lane])
    .map(({ index }) => index);
}
export function fileLocation(index: number) {
  const lane = archiveColumns.indexOf(records[index].category);
  const row = 12 + columnFiles(lane).indexOf(index);
  return { lane, row, slot: lane * 32 + row };
}
export function fileAtSlot(slot: number) {
  const files = columnFiles(Math.floor(slot / 32));
  return files[Math.max(0, Math.min(files.length - 1, (slot % 32) - 12))];
}
