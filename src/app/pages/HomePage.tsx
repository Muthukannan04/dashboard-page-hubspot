import {
  Box,
  Button,
  Divider,
  Flex,
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
  PageLink,
  PageTitle,
} from '@hubspot/ui-extensions/pages';

export const HomePage = () => {
  // -----------------------------
  // CONTACTS
  // -----------------------------
  const contacts = useCrmSearch({
    objectType: 'contacts',
    properties: ['firstname', 'lastname', 'email'],
    pageLength: 5,
  });

  // -----------------------------
  // DEALS
  // -----------------------------
  const deals = useCrmSearch({
    objectType: 'deals',
    properties: [
      'dealname',
      'amount',
      'dealstage',
      'pipeline',
      'closedate',
    ],
    pageLength: 5,
  });

  // -----------------------------
  // DEAL VALUE
  // -----------------------------
  const dealValue = deals.results.reduce((total, deal) => {
    const amount = Number(deal.properties.amount || 0);
    return total + (Number.isNaN(amount) ? 0 : amount);
  }, 0);

  return (
    <>
      {/* =========================
          PAGE HEADER
      ========================= */}

      <PageBreadcrumbs>
        <PageBreadcrumbs.Current>
          Dashboard
        </PageBreadcrumbs.Current>
      </PageBreadcrumbs>

      <Flex
        direction="row"
        justify="between"
        align="center"
      >
        <Box>
          <PageTitle>Sales Dashboard</PageTitle>

          <Text>
            Overview of your HubSpot CRM performance
          </Text>
        </Box>

        <PageLink to="/docs">
          <Button>View CRM Details</Button>
        </PageLink>
      </Flex>

      <Divider />

      {/* =========================
          SUMMARY
      ========================= */}

      <Flex direction="row" gap="large">
        <Box>
          <Text>Contacts</Text>

          {contacts.isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Heading>{contacts.total}</Heading>

              <Text>Total contacts in HubSpot</Text>
            </>
          )}
        </Box>

        <Box>
          <Text>Deals</Text>

          {deals.isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Heading>{deals.total}</Heading>

              <Text>Total deals in HubSpot</Text>
            </>
          )}
        </Box>

        <Box>
          <Text>Deal Value</Text>

          {deals.isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Heading>
                ₹{dealValue.toLocaleString('en-IN')}
              </Heading>

              <Text>Value of current page</Text>
            </>
          )}
        </Box>
      </Flex>

      <Divider />

      {/* =========================
          RECENT CONTACTS
      ========================= */}

      <Heading>Recent Contacts</Heading>

      {contacts.error ? (
        <Text>
          Error loading contacts: {contacts.error.message}
        </Text>
      ) : contacts.isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Contact ID</TableHeader>
              </TableRow>
            </TableHead>

            <TableBody>
              {contacts.results.map((contact) => {
                const firstName =
                  contact.properties.firstname || '';

                const lastName =
                  contact.properties.lastname || '';

                const fullName =
                  `${firstName} ${lastName}`.trim();

                return (
                  <TableRow key={contact.objectId}>
                    <TableCell>
                      {fullName || 'Unnamed Contact'}
                    </TableCell>

                    <TableCell>
                      {contact.properties.email || '-'}
                    </TableCell>

                    <TableCell>
                      {contact.objectId}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Flex
            direction="row"
            justify="between"
            align="center"
          >
            <Text>
              Page {contacts.pagination.currentPage}
            </Text>

            <Flex direction="row" gap="small">
              <Button
                disabled={
                  !contacts.pagination.hasPreviousPage
                }
                onClick={
                  contacts.pagination.previousPage
                }
              >
                Previous
              </Button>

              <Button
                disabled={
                  !contacts.pagination.hasNextPage
                }
                onClick={contacts.pagination.nextPage}
              >
                Next
              </Button>
            </Flex>
          </Flex>
        </>
      )}

      <Divider />

      {/* =========================
          RECENT DEALS
      ========================= */}

      <Heading>Recent Deals</Heading>

      {deals.error ? (
        <Text>
          Error loading deals: {deals.error.message}
        </Text>
      ) : deals.isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Deal Name</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Stage</TableHeader>
                <TableHeader>Deal ID</TableHeader>
              </TableRow>
            </TableHead>

            <TableBody>
              {deals.results.map((deal) => {
                const dealName =
                  deal.properties.dealname;

                const amount =
                  deal.properties.amount;

                const dealStage =
                  deal.properties.dealstage;

                return (
                  <TableRow key={deal.objectId}>
                    <TableCell>
                      {dealName || 'Unnamed Deal'}
                    </TableCell>

                    <TableCell>
                      {amount
                        ? `₹${Number(
                            amount,
                          ).toLocaleString('en-IN')}`
                        : '₹0'}
                    </TableCell>

                    <TableCell>
                      {dealStage || 'Not set'}
                    </TableCell>

                    <TableCell>
                      {deal.objectId}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Flex
            direction="row"
            justify="between"
            align="center"
          >
            <Text>
              Page {deals.pagination.currentPage}
            </Text>

            <Flex direction="row" gap="small">
              <Button
                disabled={
                  !deals.pagination.hasPreviousPage
                }
                onClick={
                  deals.pagination.previousPage
                }
              >
                Previous
              </Button>

              <Button
                disabled={
                  !deals.pagination.hasNextPage
                }
                onClick={deals.pagination.nextPage}
              >
                Next
              </Button>
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
};