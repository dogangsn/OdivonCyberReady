export interface DomainNavigationItem {
  readonly key: string;
  readonly path: string;
  readonly icon: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
}

export const PRODUCT_NAVIGATION: readonly DomainNavigationItem[] = [
  {
    key: 'assets',
    path: 'assets',
    icon: 'dns',
    label: 'Varlık Envanteri',
    title: 'Dijital Varlık Envanteri',
    description: 'Kritik sistem, uygulama, veri ve üçüncü taraf varlıklarını yönetin.',
  },
  {
    key: 'controls',
    path: 'controls',
    icon: 'policy',
    label: 'Kontrol Setleri',
    title: 'Güvenlik Kontrolleri',
    description: 'NIS2, ISO 27001 ve kurum kontrollerinin uygulama durumunu takip edin.',
  },
  {
    key: 'vulnerabilities',
    path: 'vulnerabilities',
    icon: 'bug_report',
    label: 'Açık Yönetimi',
    title: 'Zafiyet Yönetimi',
    description: 'Teknik açıkları, risk skorlarını ve giderme sürelerini yönetin.',
  },
  {
    key: 'incidents',
    path: 'incidents',
    icon: 'emergency',
    label: 'Olay Hazırlığı',
    title: 'Siber Olay Yönetimi',
    description: 'Olay kayıtlarını, müdahale görevlerini ve bildirim sürelerini takip edin.',
  },
  {
    key: 'recovery',
    path: 'recovery',
    icon: 'settings_backup_restore',
    label: 'Kurtarma ve Süreklilik',
    title: 'Kurtarma ve İş Sürekliliği',
    description: 'Yedekleme, RTO/RPO, tatbikat ve kurtarma kanıtlarını yönetin.',
  },
];
