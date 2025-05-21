import React, {useState} from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper
} from "@mui/material";
import { Tabs, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const codeSnippets = {
  js: `const res = await fetch("https://api.shortmesh.io/messages", {
  headers: {
    Authorization: "Bearer sk_live_ABC123XYZ"
  }
});`,
  curl: `curl -X GET "https://api.shortmesh.io/messages" \\
  -H "Authorization: Bearer sk_live_ABC123XYZ"`
};

const Landing = () => {
    const [userTab, setUserTab] = useState("developers");
    const [codeTab, setCodeTab] = useState("js");
  
    const handleUserTabChange = (event, newValue) => {
      setUserTab(newValue);
    };
  
    const handleCodeTabChange = (event, newValue) => {
      setCodeTab(newValue);
    };
  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            top: -150,
            left: -150,
            width: 800,
            height: 800,
            background:
              "radial-gradient(circle, rgba(63, 81, 181, 0.34) 0%, transparent 70%)",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            pt: { xs: 10, sm: 20, md: 22 },
            my: "auto",
            alignContent: "center",
            textAlign: "center",
            px: { xs: 2, sm: 2, md: 4 },

            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "4rem", sm: "5rem", md: "7.5rem" },
              mixBlendMode: "hard-light",
              color: "black",
            }}
          >
            Coming Soon
          </Typography>
          <Typography variant="subtitle1" sx={{ py: 8 }} wrap>
            ShortMesh lets you access and manage messages from all major social{" "}
            <br />
            media platforms through a single, developer-friendly API.
          </Typography>
          <Button
            size="large"
            sx={{ borderRadius: 7, textTransform: "none", px: 6 }}
            variant="contained"
          >
            Request Demo
          </Button>
        </Box>

        {/* Image section */}
        <Box
          sx={{
            my: "auto",
            alignContent: "center",
            mx: "auto",
            textAlign: "center",
            pt: 4,
            pl: 4,
            zIndex: 1,
            position: "relative",
          }}
        >
          <Box component="img" src="/ban.svg" width="60%" />
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ textAlign: "center", my: 10, px: 2, mx: 25 }}>
        <Typography variant="h4">Key Features</Typography>
        <Typography variant="subtitle1" sx={{ py: 6 }} wrap>
          From API access to real-time analytics and a full-featured dashboard,{" "}
          <br />
          ShortMesh gives you all the tools to build, monitor, and manage social
          inboxes—your way.
        </Typography>

        <Grid container spacing={6} justifyContent="center" mt={10}>
          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Card variant="outlined" sx={{ height: "100%", px: 2, py: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  API Access
                </Typography>
                <Typography variant="body2" sx={{ pt: 2 }}>
                  Brief description of what this feature does. Easy to read and
                  straight to the point.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Card variant="outlined" sx={{ height: "100%", px: 2, py: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Usage Analytics
                </Typography>
                <Typography variant="body2" sx={{ pt: 2 }}>
                  Brief description of what this feature does. Easy to read and
                  straight to the point.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Card variant="outlined" sx={{ height: "100%", px: 2, py: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Insightful Dashboard
                </Typography>
                <Typography variant="body2" sx={{ pt: 2 }}>
                  Brief description of what this feature does. Easy to read and
                  straight to the point.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Card variant="outlined" sx={{ height: "100%", px: 2, py: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Message Visibility
                </Typography>
                <Typography variant="body2" sx={{ pt: 2 }}>
                  Brief description of what this feature does. Easy to read and
                  straight to the point.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Card variant="outlined" sx={{ height: "100%", px: 2, py: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Multi-Platform Support
                </Typography>
                <Typography variant="body2" sx={{ pt: 2 }}>
                  Brief description of what this feature does. Easy to read and
                  straight to the point.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Card variant="outlined" sx={{ height: "100%", px: 2, py: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  End-to-end Encryption
                </Typography>
                <Typography variant="body2" sx={{ pt: 2 }}>
                  Brief description of what this feature does. Easy to read and
                  straight to the point.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

       {/* More Section */}
       <Box sx={{ my: 25, px: 2, mx: { xs: 2, md: 25 } }}>
        <Typography variant="h4" textAlign="center">
          Built For Everyone
        </Typography>
        <Typography variant="subtitle1" sx={{ py: 6 }} textAlign="center">
          Whether you're building the next big thing or just need a clearer view
          of your messages, <br />
          ShortMesh has you covered.
        </Typography>

        <TabContext value={userTab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 6 }}>
            <TabList
              onChange={handleUserTabChange}
              centered
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Developers" value="developers" />
              <Tab label="Business Managers" value="business" />
            </TabList>
          </Box>

          {/* Developers */}
          <TabPanel value="developers">
            <Grid container spacing={4}>
              <Grid size={{xs: 12, md: 6}}>
                <Typography variant="h5" sx={{ mb: 4 }} gutterBottom>
                  For Developers
                </Typography>
                <Typography variant="body1" sx={{ mb: 6 }}>
                  Integrate messages into your stack effortlessly. Build, monitor and manage
                  communications across platforms with ease.
                </Typography>
                <Button variant="contained" size="large" sx={{ borderRadius: 7, textTransform: "none" }}>
                  Request Demo
                </Button>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <Card variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                  <TabContext value={codeTab}>
                    <TabList
                      onChange={handleCodeTabChange}
                      indicatorColor="primary"
                      textColor="primary"
                      sx={{ mb: 2 }}
                    >
                      <Tab label="JavaScript" value="js" />
                      <Tab label="cURL" value="curl" />
                    </TabList>
                    <TabPanel value="js" sx={{ p: 0 }}>
                      <pre style={{ backgroundColor: "#f5f5f5", padding: 16, borderRadius: 8 }}>
                        <code>{codeSnippets.js}</code>
                      </pre>
                    </TabPanel>
                    <TabPanel value="curl" sx={{ p: 0 }}>
                      <pre style={{ backgroundColor: "#f5f5f5", padding: 16, borderRadius: 8 }}>
                        <code>{codeSnippets.curl}</code>
                      </pre>
                    </TabPanel>
                  </TabContext>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Business Managers */}
          <TabPanel value="business">
            <Grid container spacing={4}>
              <Grid size={{xs: 12, md: 6}}>
                <Typography variant="h5" sx={{ mb: 4 }} gutterBottom>
                  For Business Managers
                </Typography>
                <Typography variant="body1" sx={{ mb: 6 }}>
                  Get a real-time view of all customer conversations in one place. Monitor engagement and manage your team efficiently.
                </Typography>
                <Button variant="contained" size="large" sx={{ borderRadius: 7, textTransform: "none" }}>
                  Request Demo
                </Button>
              </Grid>
              <Grid size={{xs: 12, md: 6}}>
                <Card variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                  <TabContext value={codeTab}>
                    <TabList
                      onChange={handleCodeTabChange}
                      indicatorColor="primary"
                      textColor="primary"
                      sx={{ mb: 2 }}
                    >
                      <Tab label="JavaScript" value="js" />
                      <Tab label="cURL" value="curl" />
                    </TabList>
                    <TabPanel value="js" sx={{ p: 0 }}>
                      <pre style={{ backgroundColor: "#f5f5f5", padding: 16, borderRadius: 8 }}>
                        <code>{codeSnippets.js}</code>
                      </pre>
                    </TabPanel>
                    <TabPanel value="curl" sx={{ p: 0 }}>
                      <pre style={{ backgroundColor: "#f5f5f5", padding: 16, borderRadius: 8 }}>
                        <code>{codeSnippets.curl}</code>
                      </pre>
                    </TabPanel>
                  </TabContext>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>

    </>
  );
};

export default Landing;
