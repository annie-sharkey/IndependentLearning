/*
https://www.tutorialspoint.com/distributed_dbms/distributed_dbms_databases.htm
DDBMS -- distributed database management system

Collection of multiple interconnected databases which are spread physically across 
various locations that communicate via a computer network

Features of **distributed database**:
    ~ interrlated
    ~ data physically stored across multiple sites, each site managed by an independent
    DBMS 
    ~ processors in the sites are connected via network, don't have multiprocessor config

**DDBMS** is centralized software system that manages data as if it were stored in a single
location

DDBMS features:
    ~ used to create, retrieve, update, delete distributed db CRUD
    ~ synchronizes db periodically 
    ~ ensures data modified at any site is universally updated


Move to DDBMS if:
    ~ business units are distributed -- units require own data
    ~ sharing of databases across units
        might need to replicate db / share data and resources
    ~ database recovery -- replication of data helps if any site is damaged


Challenges: data integrity, processing overhead, expensive software

*/