create user RIS identified by 1234;
GRANT ALL PRIVILEGES TO RIS; 

drop table YYY;
create table YYY(
  y int primary key
);
  
DELETE YYY WHERE Y = 4;

INSERT INTO YYY VALUES(4);
INSERT INTO YYY VALUES(1);

commit;
--очистить таблицы   
BEGIN
  INSERT INTO YYY VALUES(2);
END;
COMMIT;
rollback;
select * from xxx;
select * from YYY;
