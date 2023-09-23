interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['App Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['App Owner', 'Content Creator', 'Motivational Speaker'],
  tenantName: 'Team',
  applicationName: 'NOFAP TRC',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'Create and manage day plans',
    'Track personal day streaks',
    'Create and view personal inspirations',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage teams',
    'Manage day streaks',
    'Manage day planners',
    'Manage quotes',
    'Manage inspirations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/c7551042-5f6a-4ab9-bb54-f166ad876f55',
};
