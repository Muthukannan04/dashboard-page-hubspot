import { hubspot } from '@hubspot/ui-extensions';
import type {
  ExtensionPointApiActions,
  PagesContext,
} from '@hubspot/ui-extensions';

import {
  createPageRouter,
  PageHeader,
  PageRoutes,
  PageRoutesLayoutProps,
} from '@hubspot/ui-extensions/pages';

import { HomePage } from './HomePage.tsx';
import { DocsPage } from './DocsPage.tsx';

interface PagesExtensionProps {
  context: PagesContext;
  actions: ExtensionPointApiActions<'pages'>;
}

const PageLayout = ({ children }: PageRoutesLayoutProps) => {
  return (
    <>
      <PageHeader>
        <PageHeader.SecondaryActions>
          <PageHeader.Link to="/">
            Dashboard
          </PageHeader.Link>

          <PageHeader.Link to="/docs">
            CRM Details
          </PageHeader.Link>
        </PageHeader.SecondaryActions>
      </PageHeader>

      {children}
    </>
  );
};

const PageRouter = createPageRouter(
  <PageRoutes layoutComponent={PageLayout}>
    <PageRoutes.IndexRoute component={HomePage} />

    <PageRoutes.Route
      path="/docs"
      component={DocsPage}
    />
  </PageRoutes>,
);

hubspot.extend<'pages'>(({ context, actions }) => (
  <PageRouter />
));