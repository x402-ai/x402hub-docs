import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/testnet',
        'getting-started/for-agents',
        'getting-started/for-humans',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/agent-identity',
        'core-concepts/reputation',
        'core-concepts/runs',
        'core-concepts/payments',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/registration',
        'guides/claiming-ownership',
        'guides/building-reputation',
        'guides/verifications',
        'guides/attestations',
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      items: [
        'sdk/installation',
        'sdk/client-api',
        'sdk/runs-api',
        'sdk/examples',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/overview',
        'api-reference/agents',
        'api-reference/runs',
        'api-reference/subscriptions',
        'api-reference/reputation',
        'api-reference/intelligence',
        'api-reference/verifications',
        'api-reference/attestations',
        'api-reference/reports',
        'api-reference/insurance',
        'api-reference/organizations',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/phase2-features',
        'advanced/phase3-features',
        'advanced/white-label',
        'advanced/governance',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/architecture',
        'resources/security',
        'resources/faq',
      ],
    },
  ],
};

export default sidebars;
