# Tulip-Experiments
Repository of Experiments Integrating with Tulip

## Overview
- This notebook includes several proof of concepts demonstrating connectors, bots, and other features
- The goal is to show overall functionality and provide lessons learned for starting points with connectors and bots

## Project Summaries

### Andon Summary
- In this project, I built a mobile andon Tulip app and then created a Tulip Table API bot to query the downtime history table
- This project provides a starting point for the Tulip Table API, querying data, and transforming it

### Connector Demo
- In this project, I created a SQL connector to replace a Tulip table (Also in the Andon Mobile App); this project seeks to query the data written to the SQL table from Tulip via SQLalchemy

### Shift Changeover
- This project summarizes some draft GPT-3 prompts for summarizing and analyzing shift changeover notes

### Part Counter Analytics
- Goal is to simply, easily make a build-up chart to show progressv by hour, minute for a relatively high volume line
- A lot of this thinking focuses on showing real cycle times compared to TAKT time
