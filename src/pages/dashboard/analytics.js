import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { AnalyticsGeneralOverview } from '../../components/dashboard/analytics/analytics-general-overview';
import { AnalyticsMostVisited } from '../../components/dashboard/analytics/analytics-most-visited';
import { AnalyticsSocialSources } from '../../components/dashboard/analytics/analytics-social-sources';
import { AnalyticsVisitsByCountry } from '../../components/dashboard/analytics/analytics-visits-by-country';
import { AnalyticsTrafficSources } from '../../components/dashboard/analytics/analytics-traffic-sources';
import { Reports as ReportsIcon } from '../../icons/reports';
import { gtm } from '../../lib/gtm';

const Analytics = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Dashboard: Analytics | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth="xl">
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                md={4}
                xs={12}
              >
                <AnalyticsMostVisited />
              </Grid>
              <Grid
                item
                md={8}
                xs={12}
              >
                <AnalyticsSocialSources />
              </Grid>
            </Grid>
        </Container>
      </Box>
    </>
  );
};

Analytics.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Analytics;
