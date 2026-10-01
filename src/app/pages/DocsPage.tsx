import {
  Divider,
  Heading,
  LoadingSpinner,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
  useCrmSearch,
} from '@hubspot/ui-extensions';

import {
  PageBreadcrumbs,
  PageTitle,
  PageLink,
} from '@hubspot/ui-extensions/pages';

export const DocsPage = () => {
  const contacts = useCrmSearch({
    objectType: 'contacts',
    properties: ['firstname', 'lastname', 'email'],
    pageLength: 10,
  });

  const deals = useCrmSearch({
    objectType: 'deals',
    properties: [
      'dealname',
      'amount',
      'dealstage',
      'pipeline',
      'closedate',
    ],
    pageLength: 10,
  });

  return (
    <>
      <PageBreadcrumbs>
        <PageBreadcrumbs.Current>
          CRM Details
        </PageBreadcrumbs.Current>
      </PageBreadcrumbs>

      <PageTitle>CRM Details</PageTitle>

      <Text>
        Contacts and deals from your HubSpot CRM.
      </Text>

      <Divider />

      {/* CONTACTS */}

      <Heading>Contacts</Heading>

      {contacts.isLoading && <LoadingSpinner />}

      {contacts.error && (
        <Text>
          Error: {contacts.error.message}
        </Text>
      )}

      {!contacts.isLoading && !contacts.error && (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>ID</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            {contacts.results.map((contact) => (
              <TableRow key={contact.objectId}>
                <TableCell>
                  {[
                    contact.properties.firstname,
                    contact.properties.lastname,
                  ]
                    .filter(Boolean)
                    .join(' ') || 'Unnamed'}
                </TableCell>

                <TableCell>
                  {contact.properties.email || '-'}
                </TableCell>

                <TableCell>
                  {contact.objectId}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Divider />

      {/* DEALS */}

      <Heading>Deals</Heading>

      {deals.isLoading && <LoadingSpinner />}

      {deals.error && (
        <Text>
          Error: {deals.error.message}
        </Text>
      )}

      {!deals.isLoading && !deals.error && (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Deal Name</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Stage</TableHeader>
              <TableHeader>ID</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            {deals.results.map((deal) => (
              <TableRow key={deal.objectId}>
                <TableCell>
                  {deal.properties?.dealname ||
                    'Unnamed Deal'}
                </TableCell>

                <TableCell>
                  {deal.properties?.amount
                    ? `₹${Number(
                        deal.properties.amount,
                      ).toLocaleString('en-IN')}`
                    : '-'}
                </TableCell>

                <TableCell>
                  {deal.properties?.dealstage ||
                    '-'}
                </TableCell>

                <TableCell>
                  {deal.objectId}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Divider />

      <PageLink to="/">
        ← Back to Dashboard
      </PageLink>
    </>
  );
};