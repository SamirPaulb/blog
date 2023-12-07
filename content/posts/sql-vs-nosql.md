---
title: "SQL vs. NoSQL"
description: "SQL vs. NoSQL"
tags: [sql, nosql]
date: 2022-10-04T15:58:26+08:00
lastmod: 2022-03-04T15:58:26+08:00
draft: false
author: "Samir Paul"
authorLink: "https://twitter.com/intent/follow?screen_name=SamirPaulb"
license: "CC BY 4.0"
draft: false
---


SQL vs. NoSQL
====

## Common types of NoSQL
### Key-value stores
- Array of key-value pairs. The "key" is an attribute name.
- Redis, Vodemort, Dynamo.

### Document databases
- Data is stored in documents.
- Documents are grouped in collections.
- Each document can have an entirely different structure.
- CouchDB, MongoDB.

### Wide-column / columnar databases
- Column families - containers for rows.
- No need to know all the columns up front.
- Each row can have different number of columns.
- Cassandra, HBase.

### Graph database
- Data is stored in graph structures
  - Nodes: entities
  - Properties: information about the entities
  - Lines: connections between the entities
- Neo4J, InfiniteGraph

## Differences between SQL and NoSQL
### Storage
- SQL: store data in tables.
- NoSQL: have different data storage models.

### Schema
- SQL
  - Each record conforms to a fixed schema.
  - Schema can be altered, but it requires modifying the whole database.
- NoSQL:
  - Schemas are dynamic.

### Querying
- SQL
  - Use SQL (structured query language) for defining and manipulating the data.
- NoSQL
  - Queries are focused on a collection of documents.
  - UnQL (unstructured query language).
  - Different databases have different syntax.

### Scalability
- SQL
  - Vertically scalable (by increasing the horsepower: memory, CPU, etc) and expensive.
  - Horizontally scalable (across multiple servers); but it can be challenging and time-consuming.
- NoSQL
  - Horizontablly scalable (by adding more servers) and cheap.

### ACID
- Atomicity, consistency, isolation, durability
- SQL
  - ACID compliant
  - Data reliability
  - Gurantee of transactions
- NoSQL
  - Most sacrifice ACID compliance for performance and scalability.

## Which one to use?
### SQL
- Ensure ACID compliance.
  - Reduce anomalies.
  - Protect database integrity.
- Data is structured and unchanging.

### NoSQL
- Data has little or no structure.
- Make the most of cloud computing and storage.
  - Cloud-based storage requires data to be easily spread across multiple servers to scale up.
- Rapid development.
  - Frequent updates to the data structure.

  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8274401353019049"
     crossorigin="anonymous"></script>
<!-- Display ads -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8274401353019049"
     data-ad-slot="5522300086"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>