/*
transactional databases follow rules of normalization -- turns single, large spreadsheet
into a set of related tables

transactional system

distributed database system 


***Normalization*****
Relational db has tables, contain rows and columns
Normalization is method of organization
    controls size of data as well as preserves validity


****First Normal Form (1NF:): Atomic Values********
Values in a record must be atomic and not composed of embedded arrays
ex. order_id: 1 with items: burrito, diet coke need to be entered as
        id: 1 burrito
        id: 1 diet coke

*****2nd normal form (2NF): columns depend on single primary key*******
Now identify columns that uniquely define the data in our table

Ex. we have two unique identifiers in one table those being order id to
identify all info associated with order and email to identify info associated
with the customer
    however columns like name have nothing to do with the order_id and price
    doesn't have anything to do with the email

    Break these into two tables 
    1 table: email, name
    1 table: order id, customer customer (identified with email), item, price


*****3rd normal (3NF): Non keys describe the key and nothing else********
every non primary field in our table must describe the primary key field
no field should exist that does not describe the primary key field

problem: orders table has repeated values for the key order_id, also
price doesn't have to do anything with order itself

create four total tables
    1. customers holds all customer data
    2. orders hold meta data related to a sale
    3. order_items holds the items bought
    4. products holds the items to be bought


*****In practice*********
ask: what attributes belong to which concept?

Rules are a guideline not law
More joins mean slower look up time
More intricate look ups means queries are more error prone

In practice may even denormalize 


******OLAP and OLTP********
OLTP: online transaction processing
    based on performance -- many reads, writes, deletes

OLAP: online analytical processing
    low transaction systems that change little over time apart from nightly/
    weekly loads
    these systems power data warehouses and data mining

    OLAP denormalized


    Extraction, transformation, and loading (ETL)
        Analytical systems extract what data you want from your OLTP system 
        and comb through it for errors ex. null data values
        
        Then transform as needed ex. reconciling customer info with CRM system to add
        history data, account numbers, location info

        Load into your system which is usually another database with a special layout
        ex. SQL

        Can use shell scripts, python, ruby to do this quickly


Data marts and warehouses
https://dzone.com/articles/difference-between-data-warehouse-and-data-mart
    Data warehouse -- ex. filing cabinet where you keep your data, Excel spreadsheet
        big central repository for all of an organization's historical data
        assembled from different departments and units of company

        ex. CRM, Billing, ERP, etc. ==> ETL ==> Data warehouse

    Data mart -- subset of a data warehouse
        holds only one subject area ex. finance, sales
        Data mart integrates info from a given subject area or set of source systems
        Uses a star schema

        purpose is to isolate data in order to avoid everyone querying the data warehouse 
        directly, easier for end consumers
        
        like warehouse is a relational db that stores transactional data 


    Datamart schemas
        "excel spreadsheet is an apt way to think about how data is stored in a data mart:
        flattened"

        fewer joins the better because time costly 

        **Star schema**
            Fact table in the center ==> represents a single fact you want to report on
            for an accountant might be a singular transaction like deposit, debit, adjustment, etc.

            Snowflake schema the same but dimension tables themselves have more dimensions


        Dimensions
            Fact table has keys which link to dimensional look up tables ==> use to roll up the
            data for specific queries
            Called dimensions because they present a different way of rolling up data

            ex. for sales dimensions might be:
                some kind of category, time (week/month/yr), geography, demographic

                dimension selection hard because you do not want dimension crossover
                cross checking that dimensions do not overlap is part of ETL

    
Analyzing datamart ==> use python, tableau woot, R to visualize, excel (pivot tables)

OLAP Cube ==> having three dimensions on a graph
    don't do this because it's bad practice per communications professor



*****Fact Tables and Indexes*****
Should not have a primary key or indexes
Why?
    This means inserting data into the table will require updating the index
    whenever data is inserted -- takes time
    Think -- imagine how big indexes would get if you have billions of records


Favor a star schema
    Star schema denormalizes -- denormalize dimensional look up tables for speed
    of processing
    Avoids slow joins


*****Distributed data systems*******
2008 processors aren't getting faster
You buy more RAM but the speed of processing data is causing the bottleneck issues
Then you have multiple CPUs to process many things at once

Challenge: process things in parallel 
ex. user 3002 changes password, user 3002 updates profile picture, user 3002 cancels account
What order does this happen in?


70s/80s: dbs designed with storage capacity and memory/processing speed in mind
    storage capacity -- hard drives not cheap, find a way to store efficiently with
    X amount of hard drive space, leads to adherence to normalization

    memory/processing speed -- optimizes computers for read efficiency

    take away: emphasis used to be on using a relational engine to store data and
    create tables, keys, etc. according to rules

Then NoSQL systems pick up ex. amazon 2010
    advantage: easier to build distributed NoSQL system than run a few, gigantic
    servers with RAM and disk space

    (horizontal scaling -- add more machines, vertical -- add more power ex. CPU, RAM
        to existing machine)

    Can horizontally scale with relational systems but need to be ACID compliant
    Challenge when we need to write in parallel

*****ACID******
Atomic -- single transaction happens or it doesn't, can't have a partial transaction
Consistent -- entire db changes when transaction completed, the entire state of db changes
        completely not partially
Isolated -- one transaction doesn't affect another if they happen at same time, appearance
        of queuing transactions in a single process
Durable -- when transaction concludes it's over, there is no undoing unless another
        transaction does that

...distributed systems are different

***CAP Theorem***
Distributed processing can only provide 2/3 guarantees at any given time:
        Consistency -- same as ACID
        Availability -- distributed system responds in some manner to a request
        Partition tolerance -- distributed system relies on a network to function,
            if part of network goes offline (thus partitioning system), then system
            will continue to operate


Mostly true except for the following:
        picking 2 of 3 is misleading because partitions are rare so we don't have to
        forfeit C or A

        C and A can occur many times within same system at fine granularity -- subsystems
        can make different choices and different choices can be made based on data or transaction

        All three properties are more continuous than binary ex. system may disagree about
        if a partition even exists


Enhancing A and P with eventual C
    Eventual consistency -- write operation is handed to system (insert into query) and you receive
    ack saying that the system received it and will write to disk when it can
        But at this point system not consistent because write has not hit disk
        If the node handling the write goes offline it doesn't matter because write is queued
        and will remain queued until consistency achieved

        called AP systems

        ex. Facebook's Cassandra


***Alt to ACID: BASE***

Systems that focus on AP fall into:
    Basically Available
    Soft state
    Eventually consistent

ACID systems are usually scaled up (bigger hardware) instead of out (more hardware)
BASE can be scaled by adding more nodes

NoSQL -- Cassandra, MongoDB, RethinkDB ==> good for distributed
SQL -- PostgreSQL is relational but can be distributed


*/